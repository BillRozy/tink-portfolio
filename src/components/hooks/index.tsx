import { useState, useEffect, useContext, useReducer, Reducer } from 'react';
import { Account } from '../../tinkoff-proto-messages/users';
import { MarketInfoContext } from '../MarketInfoProvider';
import tapi from '../../tapi';
import { orderBy } from 'lodash';
import {
  ExtendedPortfolioPosition,
  AccountsPositionsMap,
  ExtendedFavoriteInstrument,
} from '../../common';

export const useAccountPositions = (account: Account | null) => {
  const { shares, bonds, etfs, currencies } = useContext(MarketInfoContext);
  const [portfolioPositions, setPortfolioPositions] = useState(
    [] as ExtendedPortfolioPosition[],
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!account) return;
    (async () => {
      setLoading(true);
      try {
        const { positions } = await tapi.operationsService.GetPortfolio({
          accountId: account.id,
        });
        const assetsDictionary = [...shares, ...bonds, ...etfs, ...currencies];
        setPortfolioPositions(
          orderBy(
            positions.map((position) => ({
              ...position,
              shareInfo: assetsDictionary.find(
                (share) => share.figi === position.figi,
              ),
              accounts: [account],
            })),
            ['shareInfo.name'],
            'asc',
          ),
        );
      } finally {
        setLoading(false);
      }
    })();
  }, [account, shares, bonds, etfs, currencies]);
  return {
    loading,
    positions: portfolioPositions,
  };
};

type PortfolioPositionsReducerAction = {
  accountId: string;
  positions: ExtendedPortfolioPosition[];
};

const portfolioReducer: Reducer<
  AccountsPositionsMap,
  PortfolioPositionsReducerAction
> = (state, { accountId, positions }) => {
  return {
    ...state,
    [accountId]: positions,
  };
};

export const useAccountsPositions = (accounts: Account[]) => {
  const { shares, bonds, etfs, currencies } = useContext(MarketInfoContext);
  const [accountsPositions, dispatchAccountsPositions] = useReducer(
    portfolioReducer,
    {},
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (accounts.length === 0) return;
    const assetsDictionary = [...shares, ...bonds, ...etfs, ...currencies];
    (async () => {
      setLoading(true);
      try {
        for (const account of accounts) {
          const { positions } = await tapi.operationsService.GetPortfolio({
            accountId: account.id,
          });
          dispatchAccountsPositions({
            accountId: account.id,
            positions: orderBy(
              positions.map((position) => ({
                ...position,
                shareInfo: assetsDictionary.find(
                  (share) => share.figi === position.figi,
                ),
                accounts: [account],
              })),
              ['shareInfo.name'],
              'asc',
            ),
          });
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [accounts, shares, bonds, etfs, currencies]);
  return {
    loading,
    accountsPositions,
  };
};

export const useFavorites = () => {
  const { shares, bonds, etfs, currencies } = useContext(MarketInfoContext);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<ExtendedFavoriteInstrument[]>([]);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { favoriteInstruments } =
          await tapi.instrumentsService.GetFavorites({});
        const assetsDictionary = [...shares, ...bonds, ...etfs, ...currencies];
        setFavorites(
          orderBy(
            favoriteInstruments.map((favorite) => ({
              ...favorite,
              shareInfo: assetsDictionary.find(
                (share) => share.figi === favorite.figi,
              ),
            })),
            ['shareInfo.name'],
            'asc',
          ),
        );
      } finally {
        setLoading(false);
      }
    })();
  }, [shares, bonds, etfs, currencies]);
  return {
    loading,
    favorites,
  };
};
