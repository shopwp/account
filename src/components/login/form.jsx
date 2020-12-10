import { useState } from 'react';
import { css } from '@emotion/react/macro';
import Button from '../_common/button';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState(false);

  async function loginCustomer(creds) {
    setDisabled(true);
    setMessage(false);

    const response = await fetch('https://wpshopify-web.loc/wp-json/jwt-auth/v1/token', {
      body: JSON.stringify(creds),
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const payload = await response.json();

    const customerInfo = {
      id: payload.data.id,
      token: payload.data.token,
    };

    setDisabled(false);

    if (payload.success) {
      localStorage.setItem('wpshopify-account-auth-token', JSON.stringify(customerInfo));
      window.location.href = '/';
    } else {
      setMessage(payload.message);
    }

    console.log('result', payload);

    // appDispatch({ type: 'SET_CUSTOMER', payload: resultok.customers[0] });
  }

  function onClick() {
    loginCustomer({
      username: username,
      password: password,
    });
  }

  function onKeyDown(event) {
    if (event.key === 'Enter') {
      loginCustomer({
        username: username,
        password: password,
      });
    }
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function onUsernameChange(e) {
    setUsername(e.target.value);
  }

  const LoginFormWrapperCSS = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 500px;
    margin: 0;
    position: relative;
    flex: 1;
  `;

  const InputCSS = css`
    margin-bottom: 10px;
    border-radius: 0.4em;
    padding: 12px 18px;
    width: calc(100% - 38px);
    font-size: 16px;
    background: #fff;
    color: #1f1f23;
    margin-top: 0;
    border: 1px solid #1f1f23;
    font-weight: 400;

    &[disabled] {
      opacity: 0.5;
      background: #e9e9e9;

      &:hover {
        cursor: not-allowed;
      }
    }
  `;

  const LabelCSS = css`
    font-weight: 600;
    margin-bottom: 0.69444em;
    margin-top: 15px;
  `;

  const HeadingCSS = css`
    font-size: 42px;
    width: 100%;
    text-align: center;
    margin-top: 0;
  `;

  const messageCSS = css`
    background: #f6cdcd;
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 4px;
    visibility: ${message ? 'visible' : 'hidden'};
    transform: ${message ? 'translateY(0px)' : 'translateY(20px)'};
    transition: transform 0.2s ease;
    opacity: ${message ? 1 : 0};
    line-height: 1.5;
  `;

  const forgotPasswordLinkCSS = css`
    margin-left: 15px;
    display: inline-block;
    color: #323232;
    flex: 1;
    text-align: right;
    margin-top: 10px;
  `;

  const controlsCSS = css`
    display: flex;
    align-items: center;
    width: 100%;
  `;

  return (
    <div css={LoginFormWrapperCSS}>
      <h1 css={HeadingCSS}>Customer Login</h1>
      <label css={LabelCSS}>Email</label>
      <input
        type='email'
        placeholder='Email'
        onChange={onUsernameChange}
        disabled={disabled}
        css={InputCSS}
      />

      <label css={LabelCSS}>Password</label>
      <input
        type='password'
        placeholder='Password'
        onChange={onPasswordChange}
        disabled={disabled}
        css={InputCSS}
        onKeyDown={onKeyDown}
      />

      <div css={controlsCSS}>
        <Button text='Submit' onClick={onClick} disabled={disabled} />
        <Link to='/forgot-password' css={forgotPasswordLinkCSS}>
          Forgot password?
        </Link>
      </div>

      <p css={messageCSS}>{message && message}</p>
    </div>
  );
}

export default LoginForm;
