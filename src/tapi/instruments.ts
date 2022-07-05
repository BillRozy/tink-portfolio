import {
  AssetRequest,
  AssetResponse,
  AssetsRequest,
  AssetsResponse,
  BondResponse,
  BondsResponse,
  CurrenciesResponse,
  CurrencyResponse,
  EditFavoritesRequest,
  EditFavoritesResponse,
  EtfResponse,
  EtfsResponse,
  FutureResponse,
  FuturesResponse,
  GetAccruedInterestsRequest,
  GetAccruedInterestsResponse,
  GetBondCouponsRequest,
  GetBondCouponsResponse,
  GetDividendsRequest,
  GetDividendsResponse,
  GetFavoritesRequest,
  GetFavoritesResponse,
  GetFuturesMarginRequest,
  GetFuturesMarginResponse,
  InstrumentRequest,
  InstrumentResponse,
  InstrumentsRequest,
  InstrumentsService,
  ShareResponse,
  SharesResponse,
  TradingSchedulesRequest,
  TradingSchedulesResponse,
} from '../tinkoff-proto-messages/instruments';
import AbsService from './abs_service';

export default class InstrumentsServiceImpl
  extends AbsService
  implements InstrumentsService
{
  TradingSchedules(
    request: TradingSchedulesRequest,
  ): Promise<TradingSchedulesResponse> {
    throw new Error('Method not implemented.');
  }
  BondBy(request: InstrumentRequest): Promise<BondResponse> {
    throw new Error('Method not implemented.');
  }
  async Bonds(request: InstrumentsRequest): Promise<BondsResponse> {
    return BondsResponse.fromJSON(
      await this.POST('Bonds', InstrumentsRequest.toJSON(request)),
    );
  }
  GetBondCoupons(
    request: GetBondCouponsRequest,
  ): Promise<GetBondCouponsResponse> {
    throw new Error('Method not implemented.');
  }
  CurrencyBy(request: InstrumentRequest): Promise<CurrencyResponse> {
    throw new Error('Method not implemented.');
  }
  async Currencies(request: InstrumentsRequest): Promise<CurrenciesResponse> {
    return CurrenciesResponse.fromJSON(
      await this.POST('Currencies', InstrumentsRequest.toJSON(request)),
    );
  }
  EtfBy(request: InstrumentRequest): Promise<EtfResponse> {
    throw new Error('Method not implemented.');
  }
  async Etfs(request: InstrumentsRequest): Promise<EtfsResponse> {
    return EtfsResponse.fromJSON(
      await this.POST('Etfs', InstrumentsRequest.toJSON(request)),
    );
  }
  FutureBy(request: InstrumentRequest): Promise<FutureResponse> {
    throw new Error('Method not implemented.');
  }
  Futures(request: InstrumentsRequest): Promise<FuturesResponse> {
    throw new Error('Method not implemented.');
  }
  ShareBy(request: InstrumentRequest): Promise<ShareResponse> {
    throw new Error('Method not implemented.');
  }
  async Shares(request: InstrumentsRequest): Promise<SharesResponse> {
    return SharesResponse.fromJSON(
      await this.POST('Shares', InstrumentsRequest.toJSON(request)),
    );
  }
  GetAccruedInterests(
    request: GetAccruedInterestsRequest,
  ): Promise<GetAccruedInterestsResponse> {
    throw new Error('Method not implemented.');
  }
  GetFuturesMargin(
    request: GetFuturesMarginRequest,
  ): Promise<GetFuturesMarginResponse> {
    throw new Error('Method not implemented.');
  }
  GetInstrumentBy(request: InstrumentRequest): Promise<InstrumentResponse> {
    throw new Error('Method not implemented.');
  }
  GetDividends(request: GetDividendsRequest): Promise<GetDividendsResponse> {
    throw new Error('Method not implemented.');
  }
  GetAssetBy(request: AssetRequest): Promise<AssetResponse> {
    throw new Error('Method not implemented.');
  }
  async GetAssets(request: AssetsRequest): Promise<AssetsResponse> {
    return AssetsResponse.fromJSON(
      await this.POST('GetAssets', AssetsRequest.toJSON(request)),
    );
  }
  async GetFavorites(
    request: GetFavoritesRequest,
  ): Promise<GetFavoritesResponse> {
    return GetFavoritesResponse.fromJSON(
      await this.POST('GetFavorites', GetFavoritesRequest.toJSON(request)),
    );
  }
  EditFavorites(request: EditFavoritesRequest): Promise<EditFavoritesResponse> {
    throw new Error('Method not implemented.');
  }
  protected get apiServiceSpecifier(): string {
    return 'InstrumentsService';
  }
}
