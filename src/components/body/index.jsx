import { jsx, css } from '@emotion/react/macro';
import { AppContext } from '../app/_state/context';
import { useContext } from 'react';
import LoginForm from '../login';
import AccountHeader from './header';

function Body() {
  const [appState] = useContext(AppContext);

  const BodyCSS = css`
    flex: 1;
    padding: 20px 80px 20px 40px;
  `;

  const customerNameCSS = css`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0;
  `;

  const customerEmailCSS = css`
    margin-top: 0;
  `;

  const customerInfoCSS = css`
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  `;

  return (
    <main css={BodyCSS}>
      <AccountHeader />
      {appState.customer && (
        <div css={customerInfoCSS}>
          <p css={customerNameCSS}>{appState.customer && appState.customer.info.display_name}</p>
          <p css={customerEmailCSS}>{appState.customer && appState.customer.info.email}</p>
        </div>
      )}
    </main>
  );
}

export default Body;
