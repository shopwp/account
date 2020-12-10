import { css } from '@emotion/react/macro';
import LoginNav from './nav';

function LoginHeader() {
  const LoginHeaderCSS = css`
    height: 70px;
    margin: 0px 0 auto 0;
    width: calc(100% - 50px);
    padding: 10px 25px;
  `;

  return (
    <header css={LoginHeaderCSS}>
      <LoginNav />
    </header>
  );
}

export default LoginHeader;
