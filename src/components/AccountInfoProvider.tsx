import { createContext } from 'react';
import { Account } from '../tinkoff-proto-messages/users';
import { Outlet } from 'react-router-dom';
import { useAccounts, useAccount } from './hooks/useAccounts';

type AccountContextType = {
  account: Account | null;
  accounts: Account[];
  setAccountId: (accountId: string | undefined) => void;
};

export const AccountContext = createContext<AccountContextType>({
  account: null,
  accounts: [],
  setAccountId: (accountId: string | undefined) => null,
});

const WithAccount = () => {
  const { accounts } = useAccounts();
  const { account, setAccountId } = useAccount(accounts);
  return (
    <AccountContext.Provider
      value={{
        account,
        accounts,
        setAccountId,
      }}
    >
      <Outlet />
    </AccountContext.Provider>
  );
};

export default WithAccount;
