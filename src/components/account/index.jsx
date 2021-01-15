import Sidebar from './sidebar';
import Body from './body';
import AccountModal from './modal';
import Notice from '../_common/notice';
import { css } from '@emotion/react/macro';
import { useEffect, useContext, useState } from 'react';
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

      if (customer.success === false) {
        console.log('no success', customer);
        accountDispatch({ type: 'SET_IS_AUTHED', payload: false });
      }

      accountDispatch({ type: 'SET_CUSTOMER', payload: customer });
      accountDispatch({ type: 'SET_SUBSCRIPTIONS', payload: customer.subscriptions });
    }

    getCustomer(newUrl);
  }, [accountDispatch]);

  return (
    <div className='App' css={AppCSS}>
      <Sidebar />
      <Body />

      <AccountModal />

      {accountState.notice && (
        <Notice global={true} type={accountState.notice.type}>
          {accountState.notice.message}
        </Notice>
      )}
    </div>
  );
}

export default Account;
