import {
  GetAccountsRequest,
  GetAccountsResponse,
  GetInfoRequest,
  GetInfoResponse,
  GetMarginAttributesRequest,
  GetMarginAttributesResponse,
  GetUserTariffRequest,
  GetUserTariffResponse,
  UsersService,
} from "../tinkoff-proto-messages/users";
import AbsService from "./abs_service";

export default class UsersServiceImpl
  extends AbsService
  implements UsersService
{
  protected get apiServiceSpecifier(): string {
    return "UsersService";
  }
  GetMarginAttributes(
    request: GetMarginAttributesRequest
  ): Promise<GetMarginAttributesResponse> {
    throw new Error("Method not implemented.");
  }
  GetUserTariff(request: GetUserTariffRequest): Promise<GetUserTariffResponse> {
    throw new Error("Method not implemented.");
  }
  GetInfo(request: GetInfoRequest): Promise<GetInfoResponse> {
    throw new Error("Method not implemented.");
  }
  async GetAccounts(request: GetAccountsRequest): Promise<GetAccountsResponse> {
    return GetAccountsResponse.fromJSON(
      await this.POST("GetAccounts", GetAccountsRequest.toJSON(request))
    );
  }
}
