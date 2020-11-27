import { jsx, css } from '@emotion/react/macro';
import { useEffect } from 'react';
import Nav from './components/nav';
import Body from './components/body';
import './App.css';

function App() {
  const AppCSS = css`
    display: flex;
  `;

  async function getCustomer(url) {
    const result = await fetch(url);
    const resultok = await result.json();
    console.log('resultok', resultok);
  }

  useEffect(() => {
    const apiPrefix = 'https://wpshop.io/edd-api/v2';
    const endpoint = '/customers/';
    const token = '395af0471a1f50eee2a8005f2f9ffdca';
    const pubKey = 'd7bde62e8009e0bf07e8aa64af4cdad7';
    const email = 'arobbins@simpleblend.net';
    const url = apiPrefix + endpoint + '?key=' + pubKey + '&token=' + token + '&customer=' + email;

    console.log('on app mount', url);

    getCustomer(url);
  }, []);

  return (
    <div className='App' css={AppCSS}>
      <Nav />
      <Body />
    </div>
  );
}

export default App;
