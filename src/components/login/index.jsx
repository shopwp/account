import LoginHeader from './header';
import LoginFooter from './footer';
import Contact from '../contact';
import { css } from '@emotion/react/macro';

function Login({ children }) {
  const LoginCSS = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  return (
    <div css={LoginCSS}>
      <LoginHeader />
      {children}
      <Contact />
      <LoginFooter />
    </div>
  );
}

export default Login;
