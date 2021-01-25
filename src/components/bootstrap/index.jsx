import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Account from '../account';
import Login from '../login';
import LoginForm from '../login/form';
import ForgotPassword from '../forgot-password';
import AccountHome from '../account/home';
import AccountLicenses from '../account/licenses';
import AccountSubscriptions from '../account/subscriptions';
import AccountPurchases from '../account/purchases';
import AccountDownloads from '../account/downloads';
import AccountAffiliate from '../account/affiliate';
import { AccountContext } from '../account/_state/context';
import { useEffect, useContext } from 'react';
import React from 'react';

function Bootstrap() {
  const [accountState, accountDispatch] = useContext(AccountContext);

  function getActivePage(pathname) {
    if (pathname === '/') {
      return 'dashboard';
    }
    return pathname.substring(1);
  }

  useEffect(() => {
    if (window.location.pathname === '/login') {
      return false;
    }

    if (!accountState.isAuthed) {
      window.location.href = '/login';
    }

    accountDispatch({
      type: 'SET_ACTIVE_PAGE',
      payload: getActivePage(window.location.pathname),
    });
  }, [accountState.isAuthed]);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <Account>
              <AccountHome />
            </Account>
          )}
        />

        <Route
          path='/login'
          render={() => (
            <Login>
              <LoginForm />
            </Login>
          )}
        />
        <Route
          path='/forgot-password'
          render={() => (
            <Login>
              <ForgotPassword />
            </Login>
          )}
        />

        <Route
          path='/licenses'
          render={() => (
            <Account>
              <AccountLicenses />
            </Account>
          )}
        />

        <Route
          path='/subscriptions'
          render={() => (
            <Account>
              <AccountSubscriptions />
            </Account>
          )}
        />

        <Route
          path='/purchases'
          render={() => (
            <Account>
              <AccountPurchases />
            </Account>
          )}
        />

        <Route
          path='/downloads'
          render={() => (
            <Account>
              <AccountDownloads />
            </Account>
          )}
        />

        <Route
          path='/affiliate'
          render={() => (
            <Account>
              <AccountAffiliate />
            </Account>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Bootstrap;
