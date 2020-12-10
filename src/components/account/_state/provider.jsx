import { AccountReducer } from './reducer';
import { AccountInitialState } from './initial-state';
import { AccountContext } from './context';
import { useReducer, useMemo } from 'react';

function AccountProvider(props) {
  const [state, dispatch] = useReducer(AccountReducer, AccountInitialState(props));

  const value = useMemo(() => [state, dispatch], [state]);

  return <AccountContext.Provider value={value} {...props} />;
}

export { AccountProvider };
