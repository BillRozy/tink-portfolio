import { useContext } from 'react';
import { Tab, TabProps, Tabs } from 'react-bootstrap';
import { Account as AccountType } from '../tinkoff-proto-messages/users';
import { AccountContext } from './AccountInfoProvider';

const Account = ({
  accountInfo,
  ...rest
}: { accountInfo: AccountType } & TabProps) => {
  return (
    <Tab {...rest}>
      {accountInfo.type}: {accountInfo.id}
    </Tab>
  );
};

const Accounts = ({
  onAccountSelected,
}: {
  onAccountSelected?: (accountInfo: AccountType | null) => void;
}) => {
  const { account, accounts, setAccountId } = useContext(AccountContext);

  return (
    <Tabs
      activeKey={account?.id}
      onSelect={(k) => setAccountId(accounts.find((it) => it.id === k)?.id)}
    >
      {accounts.map((acc) => (
        <Account
          key={acc.id}
          accountInfo={acc}
          eventKey={acc.id}
          title={acc.name}
        />
      ))}
    </Tabs>
  );
};

export default Accounts;
