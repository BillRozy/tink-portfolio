import { MoneyValue, Quotation } from '../tinkoff-proto-messages/common';
import {
  Share,
  Etf,
  Bond,
  Currency,
  FavoriteInstrument,
} from '../tinkoff-proto-messages/instruments';
import { PortfolioPosition } from '../tinkoff-proto-messages/operations';
import { Account } from '../tinkoff-proto-messages/users';

export type ExtendedPortfolioPosition = PortfolioPosition & {
  shareInfo?: Share | Etf | Bond | Currency;
  accounts: Account[];
};

export type ExtendedFavoriteInstrument = FavoriteInstrument & {
  shareInfo?: Share | Etf | Bond | Currency;
};

export type AccountsPositionsMap = {
  [accountId: string]: ExtendedPortfolioPosition[];
};

export function formatPrice(
  price: MoneyValue | Quotation | number,
  precision: number = 3,
) {
  let finalResult = 0;
  if (typeof price === 'number') {
    finalResult = price;
  } else {
    finalResult = Number(price.units) + Number(price.nano) * 10 ** -9;
  }
  return Number(finalResult.toPrecision(precision));
}
