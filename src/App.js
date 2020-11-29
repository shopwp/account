import { AppProvider } from './components/app/_state/provider';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Account from './components/account';
import Login from './components/login';

function App() {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Account />
          </Route>
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
