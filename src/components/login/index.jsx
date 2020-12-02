import LoginHeader from './header';
import LoginFooter from './footer';
import { jsx, css } from '@emotion/react/macro';

function Login({ children }) {
  const LoginCSS = css`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    flex-direction: column;
  `;

  return (
    <div css={LoginCSS}>
      <LoginHeader />
      {children}
      <LoginFooter />
    </div>
  );
}

export default Login;
