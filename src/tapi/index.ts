import { UsersService } from '../tinkoff-proto-messages/users';
import UsersServiceImpl from './users';
import OperationsServiceImpl from './operations';
import { OperationsService } from '../tinkoff-proto-messages/operations';
import { InstrumentsService } from '../tinkoff-proto-messages/instruments';
import InstrumentsServiceImpl from './instruments';

// const socketURL = "wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws";
const apiURL = 'http://localhost:3000/api';
//invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.InstrumentsService/BondBy
const secretToken =
  't.nM8zZww4HrfMTosMyQ6QUZaCJfIALjChXH6oCK4u_KPLugI5TyEy36IvITmu5G-MyY5X7SeGWlfe4OL0W1GNbA';

class TinkoffApi {
  readonly usersService: UsersService;
  readonly operationsService: OperationsService;
  readonly instrumentsService: InstrumentsService;
  constructor(private readonly apiUrl: string, private readonly token: string) {
    this.usersService = new UsersServiceImpl(apiUrl, token);
    this.operationsService = new OperationsServiceImpl(apiUrl, token);
    this.instrumentsService = new InstrumentsServiceImpl(apiUrl, token);
  }
}

export default new TinkoffApi(apiURL, secretToken);
