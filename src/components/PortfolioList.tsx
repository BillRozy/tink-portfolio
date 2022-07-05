/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { Interpolation, jsx, Theme } from '@emotion/react';
import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  useCallback,
} from 'react';
import { Table, Col, Row, Spinner, Button } from 'react-bootstrap';
import tapi from '../tapi';
import MoneyWidget from './MoneyAmount';
import {
  OperationState,
  Operation,
} from '../tinkoff-proto-messages/operations';
import { AccountContext } from './AccountInfoProvider';
import OperationsSaldo from './OperationsSaldo';
import { concatMap, from, Observable, of } from 'rxjs';
import { useAccountPositions } from './hooks';
import { ExtendedPortfolioPosition } from '../common';
import SearchBar from './SearchBar';

type FigiOperation = {
  figi: string;
  operations: Operation[];
};

type FigiOperationsMap = {
  [figi: string]: Operation[];
};

const loadOperationsForPosition = (
  position: ExtendedPortfolioPosition,
): Observable<FigiOperation> => {
  return from(position.accounts).pipe(
    concatMap((account) =>
      from(
        (async () => {
          const { operations } = await tapi.operationsService.GetOperations({
            figi: position.figi,
            state: OperationState.OPERATION_STATE_UNSPECIFIED,
            accountId: account.id,
            from: account.openedDate,
            to: new Date(),
          });
          return {
            figi: position.figi,
            operations,
          };
        })(),
      ),
    ),
  );
};

const loadOperationsForPortfolio = (
  portfolioPositions: ExtendedPortfolioPosition[],
) => {
  return of(...portfolioPositions).pipe(
    concatMap((position) => loadOperationsForPosition(position)),
  );
};

const centeredStyle: Interpolation<Theme> = {
  td: {
    textAlign: 'center',
    verticalAlign: 'middle',
  },
};

const PortfolioHeader = ({ opsButton }: { opsButton: ReactNode }) => {
  return (
    <tr css={centeredStyle}>
      <td
        style={{
          textAlign: 'start',
        }}
      >
        Название
      </td>
      <td>Тикер</td>
      <td>Тип</td>
      <td>Количество</td>
      <td>Текущая Цена</td>
      <td>Средняя цена</td>
      <td>Откр. позиции (абс)</td>
      <td>{opsButton}</td>
    </tr>
  );
};

const PortfolioItem = ({
  position,
  operations,
  loading = false,
}: {
  position: ExtendedPortfolioPosition;
  operations?: Operation[];
  loading?: boolean;
}) => {
  return (
    <tr css={centeredStyle}>
      <td
        style={{
          textAlign: 'start',
        }}
      >
        {position.shareInfo?.name}
      </td>
      <td>{position.shareInfo?.ticker}</td>
      <td>{position.instrumentType}</td>
      <td>{position.quantityLots?.units}</td>

      <td>
        {position.currentPrice && (
          <MoneyWidget value={position.currentPrice}></MoneyWidget>
        )}
      </td>

      <td>
        {position.averagePositionPriceFifo && (
          <MoneyWidget value={position.averagePositionPriceFifo}></MoneyWidget>
        )}
      </td>

      <td>
        {position.expectedYield && (
          <MoneyWidget
            colorize
            value={position.expectedYield}
            currency={position.shareInfo?.currency}
          ></MoneyWidget>
        )}
      </td>

      <td>
        {position.currentPrice &&
          position.quantityLots?.units != null &&
          (loading && !operations ? (
            <Spinner animation="border"></Spinner>
          ) : (
            <OperationsSaldo
              currentPrice={position.currentPrice}
              lots={position.quantity?.units || 0}
              operations={operations}
            />
          ))}
      </td>
    </tr>
  );
};

export const PortfolioList = ({
  portfolioPositions,
}: {
  portfolioPositions: ExtendedPortfolioPosition[];
}) => {
  const [loadingOps, setLoadingOps] = useState(false);
  const [opsObservable, setOpsObservable] =
    useState<Observable<FigiOperation> | null>(null);
  const [portfolioPositionsOperations, setPortfolioPositionsOperations] =
    useState({} as FigiOperationsMap);
  const loadOperations = useCallback(() => {
    setPortfolioPositionsOperations({});
    setOpsObservable(loadOperationsForPortfolio(portfolioPositions));
  }, [portfolioPositions]);
  const cancelLoadOperations = () => {
    setOpsObservable(null);
    setLoadingOps(false);
  };
  // useEffect(() => {
  //   loadOperations();
  // }, [loadOperations]);
  useEffect(() => {
    if (!opsObservable) return;
    const sub = opsObservable.subscribe({
      next(value) {
        setPortfolioPositionsOperations((current) => ({
          ...current,
          [value.figi]: value.operations,
        }));
      },
      complete() {
        setLoadingOps(false);
      },
    });
    setLoadingOps(true);
    return () => sub?.unsubscribe();
  }, [opsObservable]);

  return (
    <Table striped bordered>
      <thead>
        <PortfolioHeader
          opsButton={
            <Button
              onClick={loadingOps ? cancelLoadOperations : loadOperations}
            >
              {loadingOps ? 'Отменить загрузку' : 'Загрузить Операции'}
            </Button>
          }
        />
      </thead>
      <tbody>
        {portfolioPositions.map((portfolio) => {
          return (
            <PortfolioItem
              loading={loadingOps}
              position={portfolio}
              key={portfolio.figi}
              operations={portfolioPositionsOperations[portfolio.figi]}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

const Portfolio = () => {
  const { account } = useContext(AccountContext);
  const { loading, positions } = useAccountPositions(account);
  const [filteredPositions, setFilteredPositions] =
    useState<ExtendedPortfolioPosition[]>(positions);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    console.log(filter);
    setFilteredPositions(
      positions.filter((position) =>
        position.shareInfo?.ticker.toUpperCase().match(filter.toUpperCase()),
      ),
    );
  }, [positions, filter]);
  return (
    <Row>
      <Col>
        {account && !loading && (
          <>
            <SearchBar onNewInput={setFilter}></SearchBar>
            <PortfolioList portfolioPositions={filteredPositions} />
          </>
        )}
        {loading && <Spinner animation="grow" />}
      </Col>
    </Row>
  );
};

export default Portfolio;
