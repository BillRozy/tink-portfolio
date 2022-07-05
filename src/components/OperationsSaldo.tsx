import { Operation, OperationType } from '../tinkoff-proto-messages/operations';
import { reduce } from 'lodash';
import { MoneyValue } from '../tinkoff-proto-messages/common';
import MoneyWidget from './MoneyAmount';
import { formatPrice } from '../common';
import { Row, Col, ListGroup } from 'react-bootstrap';
import styled from '@emotion/styled';

const ColWithPrice = styled(Col)({
  textAlign: 'end',
});

const ListItem = styled(ListGroup.Item)({
  background: 'transparent',
});

const SaldoTitle = styled(Col)({
  fontWeight: 500,
});

const OperationsSaldo = ({
  operations = [],
  currentPrice,
  lots,
}: {
  operations?: Operation[];
  currentPrice: MoneyValue;
  lots: number;
}) => {
  if (operations.length > 0) {
    const opsResult = reduce(
      operations,
      (prev, curr) => {
        if (!curr.payment) return prev;
        switch (curr.operationType) {
          case OperationType.OPERATION_TYPE_BUY:
          case OperationType.OPERATION_TYPE_SELL:
            prev.opsSaldo += formatPrice(curr.payment);
            break;
          case OperationType.OPERATION_TYPE_DIVIDEND:
            prev.dividends += formatPrice(curr.payment);
            prev.dividendsCurrency = curr.currency;
            break;
          case OperationType.OPERATION_TYPE_DIVIDEND_TAX:
            console.log(
              'OPERATION_TYPE_DIVIDEND_TAX operation',
              curr.operationType,
              curr,
            );
            prev.dividendsFees += formatPrice(curr.payment);
            prev.dividendsFeesCurrency = curr.currency;
            break;
          case OperationType.OPERATION_TYPE_BROKER_FEE:
            prev.fees += formatPrice(curr.payment);
            break;
          default:
            console.log('Unsupported operation', curr.operationType, curr);
        }
        return prev;
      },
      {
        dividends: 0,
        dividendsCurrency: currentPrice.currency,
        dividendsFees: 0,
        dividendsFeesCurrency: currentPrice.currency,
        fees: 0,
        opsSaldo: 0,
      },
    );
    const positionsPrice = lots * formatPrice(currentPrice);
    const consolidatedPrice = positionsPrice + opsResult.opsSaldo;
    return (
      <ListGroup variant="flush">
        <ListItem>
          <Row>
            <SaldoTitle xs="4">Сальдо:</SaldoTitle>
          </Row>
          <Row>
            <Col xs="1"></Col>
            <Col xs="3">Позиции:</Col>
            <ColWithPrice>
              <MoneyWidget
                value={positionsPrice}
                currency={currentPrice.currency}
                colorize
              ></MoneyWidget>
            </ColWithPrice>
          </Row>
          <Row>
            <Col xs="1"></Col>
            <Col xs="3">Операции:</Col>
            <ColWithPrice>
              <MoneyWidget
                value={opsResult.opsSaldo}
                currency={currentPrice.currency}
                colorize
              ></MoneyWidget>
            </ColWithPrice>
          </Row>
          <Row>
            <Col xs="1"></Col>
            <Col xs="3">Итого:</Col>
            <ColWithPrice>
              <MoneyWidget
                value={consolidatedPrice}
                currency={currentPrice.currency}
                colorize
              ></MoneyWidget>
            </ColWithPrice>
          </Row>
        </ListItem>
        {opsResult.dividends > 0 && (
          <ListItem>
            <Row>
              <SaldoTitle xs="4">Дивы:</SaldoTitle>
              <ColWithPrice>
                <MoneyWidget
                  value={opsResult.dividends}
                  currency={opsResult.dividendsCurrency}
                  colorize
                ></MoneyWidget>
              </ColWithPrice>
            </Row>
          </ListItem>
        )}

        <ListItem>
          <Row>
            <SaldoTitle xs="4">Налоги:</SaldoTitle>
          </Row>
          <Row>
            <Col xs="1"></Col>
            <Col xs="3">Операции:</Col>
            <ColWithPrice>
              <MoneyWidget
                value={opsResult.fees}
                currency={currentPrice.currency}
                colorize
              ></MoneyWidget>
            </ColWithPrice>
          </Row>
          {opsResult.dividendsFees < 0 && (
            <Row>
              <Col xs="1"></Col>
              <Col xs="3">Дивы:</Col>
              <ColWithPrice>
                <MoneyWidget
                  value={opsResult.dividendsFees}
                  currency={opsResult.dividendsFeesCurrency}
                  colorize
                ></MoneyWidget>
              </ColWithPrice>
            </Row>
          )}
        </ListItem>
      </ListGroup>
    );
  } else {
    return <span>---</span>;
  }
};

export default OperationsSaldo;
