import { AppProvider } from './components/app/_state/provider';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Account from './components/account';
import Login from './components/login';
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
  }, []);

  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>{isAuthed && <Account />}</Route>
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
