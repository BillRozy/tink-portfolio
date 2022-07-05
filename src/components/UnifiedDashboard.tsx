import { useAccounts } from './hooks/useAccounts';
import { useAccountsPositions } from './hooks';
import { AccountsPositionsMap, ExtendedPortfolioPosition } from '../common';
import { reduce } from 'lodash';
import { MoneyValue, Quotation } from '../tinkoff-proto-messages/common';
import { useEffect, useState } from 'react';
import { PortfolioList } from './PortfolioList';

const mergeQuantity = (
  prev: Quotation | undefined,
  curr: Quotation | undefined,
): Quotation | undefined => {
  return prev && curr
    ? {
        nano: prev.nano + curr.nano,
        units: prev.units + curr.units,
      }
    : prev ?? curr;
};

const mergeMoneyValue = (
  prev: MoneyValue | undefined,
  curr: MoneyValue | undefined,
): MoneyValue | undefined => {
  return prev && curr
    ? {
        nano: (prev.nano + curr.nano) / 2,
        units: (prev.units + curr.units) / 2,
        currency: prev.currency,
      }
    : prev ?? curr;
};

const mergePosition = (
  prevPos: ExtendedPortfolioPosition,
  currPos: ExtendedPortfolioPosition,
): ExtendedPortfolioPosition => {
  return {
    ...prevPos,
    quantity: mergeQuantity(prevPos.quantity, currPos.quantity),
    expectedYield: mergeQuantity(prevPos.expectedYield, currPos.expectedYield),
    quantityLots: mergeQuantity(prevPos.quantityLots, currPos.quantityLots),
    averagePositionPricePt: mergeQuantity(
      prevPos.averagePositionPricePt,
      currPos.averagePositionPricePt,
    ),
    averagePositionPrice: mergeMoneyValue(
      prevPos.averagePositionPrice,
      currPos.averagePositionPrice,
    ),
    currentNkd: mergeMoneyValue(prevPos.currentNkd, currPos.currentNkd),
    currentPrice: mergeMoneyValue(prevPos.currentPrice, currPos.currentPrice),
    averagePositionPriceFifo: mergeMoneyValue(
      prevPos.averagePositionPriceFifo,
      currPos.averagePositionPriceFifo,
    ),
    accounts: [...new Set([...prevPos.accounts, ...currPos.accounts])],
  };
};

const mergePortfolios = (
  accPosMap: AccountsPositionsMap,
): ExtendedPortfolioPosition[] => {
  return Object.values(
    reduce(
      Object.values(accPosMap).flat(),
      (prev, current) => {
        if (current.figi in prev) {
          prev[current.figi] = mergePosition(prev[current.figi], current);
        } else {
          prev[current.figi] = current;
        }
        return prev;
      },
      {} as { [figi: string]: ExtendedPortfolioPosition },
    ),
  );
};

const UnifiedDashboard = () => {
  const { accounts } = useAccounts();
  const { accountsPositions } = useAccountsPositions(accounts);
  const [mergedPositions, setMergedPositions] = useState<
    ExtendedPortfolioPosition[]
  >([]);
  useEffect(() => {
    setMergedPositions(mergePortfolios(accountsPositions));
  }, [accountsPositions]);
  return <PortfolioList portfolioPositions={mergedPositions}></PortfolioList>;
};

export default UnifiedDashboard;
