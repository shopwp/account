import LoginForm from './form';
import LoginHeader from './header';
import LoginFooter from './footer';
import { jsx, css } from '@emotion/react/macro';

function Login() {
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
      <LoginForm />
      <LoginFooter />
    </div>
  );
}

export default Login;
