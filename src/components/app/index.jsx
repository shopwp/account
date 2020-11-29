import { useEffect, useContext } from 'react';
import { AppContext } from './_state/context';

function AppWrapper({ children }) {
  const [appState, appDispatch] = useContext(AppContext);

  useEffect(() => {
    //  const newUrl = 'https://wpshop.io/wp-json/wpshopifyAPI/v1/login';
    //  const apiPrefix = 'https://wpshop.io/edd-api/v2';
    //  const endpoint = '/customers/';
    //  const token = '395af0471a1f50eee2a8005f2f9ffdca';
    //  const pubKey = 'd7bde62e8009e0bf07e8aa64af4cdad7';
    //  const email = 'arobbins@simpleblend.net';
    //  const url = apiPrefix + endpoint + '?key=' + pubKey + '&token=' + token + '&customer=' + email;
    //  async function getCustomer(url) {
    //    const result = await fetch(url);
    //    const resultok = await result.json();
    //    console.log('result', resultok);
    //    // appDispatch({ type: 'SET_CUSTOMER', payload: resultok.customers[0] });
    //  }
    //  console.log('on app mount');
    //  getCustomer(newUrl);
  }, [appDispatch]);

  return children;
}

export default AppWrapper;
