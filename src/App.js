import './App.css';
import { AccountProvider } from './components/account/_state/provider';
import { BrowserRouter as Router } from 'react-router-dom';
import Bootstrap from './components/bootstrap';

function App() {
  return (
    <Router>
      <AccountProvider>
        <Bootstrap />
      </AccountProvider>
    </Router>
  );
}

export default App;
