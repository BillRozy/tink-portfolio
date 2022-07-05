import { useFavorites } from './hooks';
import {
  ExtendedFavoriteInstrument,
  ExtendedPortfolioPosition,
} from '../common';
import { useEffect, useState } from 'react';
import { PortfolioList } from './PortfolioList';
import { PortfolioPosition } from '../tinkoff-proto-messages/operations';

const createFavoriteAdapter = (
  favorite: ExtendedFavoriteInstrument,
): ExtendedPortfolioPosition => {
  return {
    ...PortfolioPosition.fromJSON({}),
    shareInfo: favorite.shareInfo,
    accounts: [],
    figi: favorite.figi,
    instrumentType: favorite.instrumentType,
  };
};

const Favorites = () => {
  const { favorites } = useFavorites();
  const [mappedFavorites, setMappedFavorites] = useState<
    ExtendedPortfolioPosition[]
  >([]);
  useEffect(() => {
    setMappedFavorites(favorites.map(createFavoriteAdapter));
  }, [favorites]);
  return <PortfolioList portfolioPositions={mappedFavorites}></PortfolioList>;
};

export default Favorites;
