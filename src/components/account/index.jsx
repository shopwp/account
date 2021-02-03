import Sidebar from './sidebar';
import Body from './body';
import AccountModal from './modal';
import Notice from '../_common/notice';
import { getApiDomain } from '../_common/api';
import { css } from '@emotion/react/macro';
import { useEffect, useContext } from 'react';
import { AccountContext } from './_state/context';
import to from 'await-to-js';

function Account({ children }) {
  const [accountState, accountDispatch] = useContext(AccountContext);

  const AppCSS = css`
    display: flex;
    height: 100%;
    align-items: stretch
    font-family: 'Manrope', sans-serif;
    background: #f6f9fc;
  `;

  useEffect(() => {
    const newUrl = getApiDomain() + '/wp-json/customers/v1/get';
    const customerAuth = JSON.parse(localStorage.getItem('wpshopify-account-auth-token'));

    async function getCustomer(url) {
      const [, result] = await to(
        fetch(url, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + customerAuth.token,
          },
          method: 'POST',
          body: JSON.stringify(customerAuth),
        })
      );

      const customer = await result.json();

      if (customer.code && customer.code === 'internal_server_error') {
        localStorage.removeItem('wpshopify-account-auth-token');
        window.location.href = '/login?logout=api_error';
        return;
      }

      if (customer.success === false) {
        accountDispatch({ type: 'SET_IS_AUTHED', payload: false });
      }

      accountDispatch({ type: 'SET_CUSTOMER', payload: customer });
      accountDispatch({ type: 'SET_SUBSCRIPTIONS', payload: customer.subscriptions });
    }

    getCustomer(newUrl);
  }, [accountDispatch]);

  return (
    accountState.isAuthed && (
      <div className='App' css={AppCSS}>
        <Sidebar />
        <Body>{children}</Body>
        <AccountModal />

        {accountState.notice && (
          <Notice global={true} type={accountState.notice.type}>
            {accountState.notice.message}
          </Notice>
        )}
      </div>
    )
  );
}

export default Account;
