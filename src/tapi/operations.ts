import {
  BrokerReportRequest,
  BrokerReportResponse,
  GetDividendsForeignIssuerRequest,
  GetDividendsForeignIssuerResponse,
  OperationsRequest,
  OperationsResponse,
  OperationsService,
  PortfolioRequest,
  PortfolioResponse,
  PositionsRequest,
  PositionsResponse,
  WithdrawLimitsRequest,
  WithdrawLimitsResponse,
} from "../tinkoff-proto-messages/operations";
import AbsService from "./abs_service";

export default class OperationsServiceImpl
  extends AbsService
  implements OperationsService
{
  protected get apiServiceSpecifier(): string {
    return "OperationsService";
  }
  async GetOperations(request: OperationsRequest): Promise<OperationsResponse> {
    return OperationsResponse.fromJSON(
      await this.POST("GetOperations", OperationsRequest.toJSON(request))
    );
  }
  async GetPortfolio(request: PortfolioRequest): Promise<PortfolioResponse> {
    return PortfolioResponse.fromJSON(
      await this.POST("GetPortfolio", PortfolioRequest.toJSON(request))
    );
  }
  GetPositions(request: PositionsRequest): Promise<PositionsResponse> {
    throw new Error("Method not implemented.");
  }
  GetWithdrawLimits(
    request: WithdrawLimitsRequest
  ): Promise<WithdrawLimitsResponse> {
    throw new Error("Method not implemented.");
  }
  GetBrokerReport(request: BrokerReportRequest): Promise<BrokerReportResponse> {
    throw new Error("Method not implemented.");
  }
  GetDividendsForeignIssuer(
    request: GetDividendsForeignIssuerRequest
  ): Promise<GetDividendsForeignIssuerResponse> {
    throw new Error("Method not implemented.");
  }
}
