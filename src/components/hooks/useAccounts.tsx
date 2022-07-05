import { useState, useEffect, useCallback } from 'react';
import { Account } from '../../tinkoff-proto-messages/users';
import { useParams, useNavigate } from 'react-router-dom';
import tapi from '../../tapi';

export const useAccount = (accounts: Account[]) => {
  const navigate = useNavigate();
  const { accountId } = useParams();
  const [account, setAccount] = useState<Account | null>(null);
  const setAccountId = useCallback(
    (accountId: string | undefined) => {
      navigate(`/accounts/${accountId ?? ''}`);
    },
    [navigate],
  );
  useEffect(() => {
    setAccount(accounts.find((acc) => acc.id === accountId) ?? null);
  }, [accountId, accounts]);
  // useEffect(() => {
  //   !account && accounts.length > 0 && setAccountId(accounts[0].id);
  // }, [account, accounts, setAccountId]);
  return {
    account,
    setAccountId,
  };
};

export const useAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  useEffect(() => {
    (async () => {
      const { accounts } = await tapi.usersService.GetAccounts({});
      setAccounts(accounts);
    })();
  }, []);
  return {
    accounts,
  };
};
