import { createContext, ReactNode, useEffect, useState } from "react";
import {
  Bond,
  Currency,
  Etf,
  InstrumentStatus,
  Share,
} from "../tinkoff-proto-messages/instruments";
import tapi from "../tapi";
import { Spinner } from "react-bootstrap";

type MarketInfoContextType = {
  shares: Share[];
  etfs: Etf[];
  bonds: Bond[];
  currencies: Currency[];
  marketInfoReady: boolean;
};

export const MarketInfoContext = createContext<MarketInfoContextType>({
  shares: [],
  etfs: [],
  bonds: [],
  currencies: [],
  marketInfoReady: false,
});

const MarketInfoProvider = ({ children }: { children: ReactNode }) => {
  const [shares, setShares] = useState([] as Share[]);
  const [etfs, setEtfs] = useState([] as Etf[]);
  const [bonds, setBonds] = useState([] as Bond[]);
  const [currencies, setCurrencies] = useState([] as Currency[]);
  const [marketInfoReady, setMarketInfoReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setShares(
          (
            await tapi.instrumentsService.Shares({
              instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_ALL,
            })
          ).instruments
        );
        setEtfs(
          (
            await tapi.instrumentsService.Etfs({
              instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_ALL,
            })
          ).instruments
        );
        setBonds(
          (
            await tapi.instrumentsService.Bonds({
              instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_ALL,
            })
          ).instruments
        );
        setCurrencies(
          (
            await tapi.instrumentsService.Currencies({
              instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_ALL,
            })
          ).instruments
        );
      } finally {
        setMarketInfoReady(true);
      }
    })();
  }, []);
  return (
    <MarketInfoContext.Provider
      value={{
        shares,
        etfs,
        bonds,
        currencies,
        marketInfoReady,
      }}
    >
      {marketInfoReady ? children : <Spinner animation="grow" />}
    </MarketInfoContext.Provider>
  );
};

export default MarketInfoProvider;
