/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MoneyValue } from "./common";
import { GetAccountsResponse, GetAccountsRequest } from "./users";
import {
  PostOrderResponse,
  GetOrdersResponse,
  CancelOrderResponse,
  OrderState,
  PostOrderRequest,
  GetOrdersRequest,
  CancelOrderRequest,
  GetOrderStateRequest,
} from "./orders";
import {
  PositionsResponse,
  OperationsResponse,
  PortfolioResponse,
  PositionsRequest,
  OperationsRequest,
  PortfolioRequest,
} from "./operations";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Запрос открытия счёта в песочнице. */
export interface OpenSandboxAccountRequest {}

/** Номер открытого счёта в песочнице. */
export interface OpenSandboxAccountResponse {
  /** Номер счёта */
  accountId: string;
}

/** Запрос закрытия счёта в песочнице. */
export interface CloseSandboxAccountRequest {
  /** Номер счёта */
  accountId: string;
}

/** Результат закрытия счёта в песочнице. */
export interface CloseSandboxAccountResponse {}

/** Запрос пополнения счёта в песочнице. */
export interface SandboxPayInRequest {
  /** Номер счёта */
  accountId: string;
  /** Сумма пополнения счёта в рублях */
  amount: MoneyValue | undefined;
}

/** Результат пополнения счёта, текущий баланс. */
export interface SandboxPayInResponse {
  /** Текущий баланс счёта */
  balance: MoneyValue | undefined;
}

function createBaseOpenSandboxAccountRequest(): OpenSandboxAccountRequest {
  return {};
}

export const OpenSandboxAccountRequest = {
  encode(
    _: OpenSandboxAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenSandboxAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSandboxAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): OpenSandboxAccountRequest {
    return {};
  },

  toJSON(_: OpenSandboxAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenSandboxAccountRequest>, I>>(
    _: I
  ): OpenSandboxAccountRequest {
    const message = createBaseOpenSandboxAccountRequest();
    return message;
  },
};

function createBaseOpenSandboxAccountResponse(): OpenSandboxAccountResponse {
  return { accountId: "" };
}

export const OpenSandboxAccountResponse = {
  encode(
    message: OpenSandboxAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenSandboxAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSandboxAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenSandboxAccountResponse {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
    };
  },

  toJSON(message: OpenSandboxAccountResponse): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenSandboxAccountResponse>, I>>(
    object: I
  ): OpenSandboxAccountResponse {
    const message = createBaseOpenSandboxAccountResponse();
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseCloseSandboxAccountRequest(): CloseSandboxAccountRequest {
  return { accountId: "" };
}

export const CloseSandboxAccountRequest = {
  encode(
    message: CloseSandboxAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CloseSandboxAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseSandboxAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CloseSandboxAccountRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
    };
  },

  toJSON(message: CloseSandboxAccountRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CloseSandboxAccountRequest>, I>>(
    object: I
  ): CloseSandboxAccountRequest {
    const message = createBaseCloseSandboxAccountRequest();
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseCloseSandboxAccountResponse(): CloseSandboxAccountResponse {
  return {};
}

export const CloseSandboxAccountResponse = {
  encode(
    _: CloseSandboxAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CloseSandboxAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseSandboxAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CloseSandboxAccountResponse {
    return {};
  },

  toJSON(_: CloseSandboxAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CloseSandboxAccountResponse>, I>>(
    _: I
  ): CloseSandboxAccountResponse {
    const message = createBaseCloseSandboxAccountResponse();
    return message;
  },
};

function createBaseSandboxPayInRequest(): SandboxPayInRequest {
  return { accountId: "", amount: undefined };
}

export const SandboxPayInRequest = {
  encode(
    message: SandboxPayInRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.amount !== undefined) {
      MoneyValue.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SandboxPayInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSandboxPayInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        case 2:
          message.amount = MoneyValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SandboxPayInRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      amount: isSet(object.amount)
        ? MoneyValue.fromJSON(object.amount)
        : undefined,
    };
  },

  toJSON(message: SandboxPayInRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.amount !== undefined &&
      (obj.amount = message.amount
        ? MoneyValue.toJSON(message.amount)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SandboxPayInRequest>, I>>(
    object: I
  ): SandboxPayInRequest {
    const message = createBaseSandboxPayInRequest();
    message.accountId = object.accountId ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? MoneyValue.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseSandboxPayInResponse(): SandboxPayInResponse {
  return { balance: undefined };
}

export const SandboxPayInResponse = {
  encode(
    message: SandboxPayInResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.balance !== undefined) {
      MoneyValue.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SandboxPayInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSandboxPayInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = MoneyValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SandboxPayInResponse {
    return {
      balance: isSet(object.balance)
        ? MoneyValue.fromJSON(object.balance)
        : undefined,
    };
  },

  toJSON(message: SandboxPayInResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? MoneyValue.toJSON(message.balance)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SandboxPayInResponse>, I>>(
    object: I
  ): SandboxPayInResponse {
    const message = createBaseSandboxPayInResponse();
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? MoneyValue.fromPartial(object.balance)
        : undefined;
    return message;
  },
};

/** Сервис для работы с песочницей TINKOFF INVEST API */
export interface SandboxService {
  /** Метод регистрации счёта в песочнице. */
  OpenSandboxAccount(
    request: OpenSandboxAccountRequest
  ): Promise<OpenSandboxAccountResponse>;
  /** Метод получения счетов в песочнице. */
  GetSandboxAccounts(request: GetAccountsRequest): Promise<GetAccountsResponse>;
  /** Метод закрытия счёта в песочнице. */
  CloseSandboxAccount(
    request: CloseSandboxAccountRequest
  ): Promise<CloseSandboxAccountResponse>;
  /** Метод выставления торгового поручения в песочнице. */
  PostSandboxOrder(request: PostOrderRequest): Promise<PostOrderResponse>;
  /** Метод получения списка активных заявок по счёту в песочнице. */
  GetSandboxOrders(request: GetOrdersRequest): Promise<GetOrdersResponse>;
  /** Метод отмены торгового поручения в песочнице. */
  CancelSandboxOrder(request: CancelOrderRequest): Promise<CancelOrderResponse>;
  /** Метод получения статуса заявки в песочнице. */
  GetSandboxOrderState(request: GetOrderStateRequest): Promise<OrderState>;
  /** Метод получения позиций по виртуальному счёту песочницы. */
  GetSandboxPositions(request: PositionsRequest): Promise<PositionsResponse>;
  /** Метод получения операций в песочнице по номеру счёта. */
  GetSandboxOperations(request: OperationsRequest): Promise<OperationsResponse>;
  /** Метод получения портфолио в песочнице. */
  GetSandboxPortfolio(request: PortfolioRequest): Promise<PortfolioResponse>;
  /** Метод пополнения счёта в песочнице. */
  SandboxPayIn(request: SandboxPayInRequest): Promise<SandboxPayInResponse>;
}

export class SandboxServiceClientImpl implements SandboxService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.OpenSandboxAccount = this.OpenSandboxAccount.bind(this);
    this.GetSandboxAccounts = this.GetSandboxAccounts.bind(this);
    this.CloseSandboxAccount = this.CloseSandboxAccount.bind(this);
    this.PostSandboxOrder = this.PostSandboxOrder.bind(this);
    this.GetSandboxOrders = this.GetSandboxOrders.bind(this);
    this.CancelSandboxOrder = this.CancelSandboxOrder.bind(this);
    this.GetSandboxOrderState = this.GetSandboxOrderState.bind(this);
    this.GetSandboxPositions = this.GetSandboxPositions.bind(this);
    this.GetSandboxOperations = this.GetSandboxOperations.bind(this);
    this.GetSandboxPortfolio = this.GetSandboxPortfolio.bind(this);
    this.SandboxPayIn = this.SandboxPayIn.bind(this);
  }
  OpenSandboxAccount(
    request: OpenSandboxAccountRequest
  ): Promise<OpenSandboxAccountResponse> {
    const data = OpenSandboxAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tinkoff.public.invest.api.contract.v1.SandboxService",
      "OpenSandboxAccount",
      data
    );
    return promise.then((data) =>
      OpenSandboxAccountResponse.decode(new _m0.Reader(data))
    );
  }

  GetSandboxAccounts(
    request: GetAccountsRequest
  ): Promise<GetAccountsResponse> {
    const data = GetAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tinkoff.public.invest.api.contract.v1.SandboxService",
      "GetSandboxAccounts",
      data
    );
    return promise.then((data) =>
      GetAccountsResponse.decode(new _m0.Reader(data))
    );
  }

  CloseSandboxAccount(
    request: CloseSandboxAccountRequest
  ): Promise<CloseSandboxAccountResponse> {
    const data = CloseSandboxAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tinkoff.public.invest.api.contract.v1.SandboxService",
      "CloseSandboxAccount",
      data
    );
    return promise.then((data) =>
      CloseSandboxAccountResponse.decode(new _m0.Reader(data))
    );
  }

  PostSandboxOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
    const data = PostOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tinkoff.public.invest.api.contract.v1.SandboxService",
      "PostSandboxOrder",
      data
    );
    return promise.then((data) =>
      PostOrderResponse.decode(new _m0.Reader(data))
    );
  }

  GetSandboxOrders(request: GetOrdersRequest): Promise<GetOrdersResponse> {
    const data = GetOrdersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tinkoff.public.invest.api.contract.v1.SandboxService",
      "GetSandboxOrders",
      data
    );
    return promise.then((data) =>
      GetOrdersResponse.decode(new _m0.Reader(data))
    );
  }

  CancelSandboxOrder(
    request: CancelOrderRequest
  ): Promise<CancelOrderResponse> {
    const data = CancelOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tinkoff.public.invest.api.contract.v1.SandboxService",
      "CancelSandboxOrder",
      data
    );
    return promise.then((data) =>
      CancelOrderResponse.decode(new _m0.Reader(data))
    );
  }

  GetSandboxOrderState(request: GetOrderStateRequest): Promise<OrderState> {
    const data = GetOrderStateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tinkoff.public.invest.api.contract.v1.SandboxService",
      "GetSandboxOrderState",
      data
    );
    return promise.then((data) => OrderState.decode(new _m0.Reader(data)));
  }

  GetSandboxPositions(request: PositionsRequest): Promise<PositionsResponse> {
    const data = PositionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tinkoff.public.invest.api.contract.v1.SandboxService",
      "GetSandboxPositions",
      data
    );
    return promise.then((data) =>
      PositionsResponse.decode(new _m0.Reader(data))
    );
  }

  GetSandboxOperations(
    request: OperationsRequest
  ): Promise<OperationsResponse> {
    const data = OperationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tinkoff.public.invest.api.contract.v1.SandboxService",
      "GetSandboxOperations",
      data
    );
    return promise.then((data) =>
      OperationsResponse.decode(new _m0.Reader(data))
    );
  }

  GetSandboxPortfolio(request: PortfolioRequest): Promise<PortfolioResponse> {
    const data = PortfolioRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tinkoff.public.invest.api.contract.v1.SandboxService",
      "GetSandboxPortfolio",
      data
    );
    return promise.then((data) =>
      PortfolioResponse.decode(new _m0.Reader(data))
    );
  }

  SandboxPayIn(request: SandboxPayInRequest): Promise<SandboxPayInResponse> {
    const data = SandboxPayInRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tinkoff.public.invest.api.contract.v1.SandboxService",
      "SandboxPayIn",
      data
    );
    return promise.then((data) =>
      SandboxPayInResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
