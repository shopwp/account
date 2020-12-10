import { AccountProvider } from './components/account/_state/provider';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Account from './components/account';
import Login from './components/login';
import LoginForm from './components/login/form';
import ForgotPassword from './components/forgot-password';
import { useEffect, useState } from 'react';

function App() {
  const [isAuthed] = useState(() => {
    if (window.location.pathname === '/' && !localStorage.getItem('wpshopify-account-auth-token')) {
      return false;
    }

    return true;
  });
  useEffect(() => {
    if (!isAuthed) {
      window.location.href = '/login';
    }
  }, [isAuthed]);

  return (
    <Router>
      <AccountProvider>
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
          <Route path='/'>{isAuthed && <Account />}</Route>
        </Switch>
      </AccountProvider>
    </Router>
  );
}

export default App;
