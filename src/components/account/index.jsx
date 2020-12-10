import Sidebar from './sidebar';
import Body from './body';
import { css } from '@emotion/react/macro';
import { useEffect, useContext } from 'react';
import { AccountContext } from './_state/context';

function Account() {
  const [accountState, accountDispatch] = useContext(AccountContext);

  const AppCSS = css`
    display: flex;
    font-family: 'Manrope', sans-serif;
    background: #f6f9fc;
  `;
  useEffect(() => {
    const newUrl = 'https://wpshopify-web.loc/wp-json/customers/v1/get';
    const customerAuth = JSON.parse(localStorage.getItem('wpshopify-account-auth-token'));

    async function getCustomer(url) {
      const result = await fetch(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + customerAuth.token,
        },
        method: 'POST',
        body: JSON.stringify(customerAuth),
      });

      const customer = await result.json();

      accountDispatch({ type: 'SET_CUSTOMER', payload: customer });
    }

    getCustomer(newUrl);
  }, [accountDispatch]);

  return (
    <div className='App' css={AppCSS}>
      <Sidebar />
      <Body />
    </div>
  );
}

export default Account;
