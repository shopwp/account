import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Account from '../account';
import Login from '../login';
import LoginForm from '../login/form';
import ForgotPassword from '../forgot-password';
import { AccountContext } from '../account/_state/context';
import { useEffect, useContext } from 'react';

function Bootstrap() {
  const [accountState] = useContext(AccountContext);

  useEffect(() => {
    if (window.location.pathname === '/login') {
      return false;
    }

    if (!accountState.isAuthed) {
      window.location.href = '/login';
    }
  }, [accountState.isAuthed]);

  return (
    <Switch>
      <Route path='/login'>
        <Login>
          <LoginForm />
        </Login>
      </Route>
      <Route path='/forgot-password'>
        <Login>
          <ForgotPassword />
        </Login>
      </Route>
      <Route path='/'>{accountState.isAuthed && <Account />}</Route>
    </Switch>
  );
}

export default Bootstrap;
