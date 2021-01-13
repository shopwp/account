import { useState } from 'react';
import { css } from '@emotion/react/macro';
import Button from '../_common/button';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState(false);
  const [messageType, setMessageType] = useState(false);

  async function resetPassword(email) {
    setMessage(false);

    if (!email) {
      setMessage('Please enter a valid email');
      setMessageType('error');
      return;
    }

    setDisabled(true);

    const response = await fetch('https://wpshopify-web.loc/wp-json/customers/v1/reset-password', {
      body: JSON.stringify({ email: email }),
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const payload = await response.json();

    setDisabled(false);
    setMessage(payload.message);

    if (payload.success) {
      setEmail('');
      setMessageType('success');
    } else {
      setMessageType('error');
    }

    // appDispatch({ type: 'SET_CUSTOMER', payload: resultok.customers[0] });
  }

  function onClick() {
    resetPassword(email);
  }

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') {
      resetPassword(email);
    }
  }

  const ForgotPasswordCSS = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 500px;
    margin: 0;
    justify-content: center;
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

    + p {
      margin-top: -15px;
      text-align: center;
      width: 100%;
      margin-bottom: 20px;
    }
  `;

  const messageCSS = css`
    background: ${messageType === 'error' ? '#f6cdcd;' : '#c1ffdd'};
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 4px;
    visibility: ${message ? 'visible' : 'hidden'};
    transform: ${message ? 'translateY(0px)' : 'translateY(20px)'};
    transition: transform 0.2s ease;
    opacity: ${message ? 1 : 0};
    line-height: 1.5;
    width: calc(100% - 40px);
    text-align: center;
  `;

  const controlsCSS = css`
    display: flex;
    align-items: center;
    width: 100%;
  `;

  return (
    <div css={ForgotPasswordCSS}>
      <h1 css={HeadingCSS}>Reset Password</h1>
      <p>You will be emailed a secure password reset link.</p>
      <label css={LabelCSS}>Email</label>
      <input
        type='email'
        placeholder='Email'
        onChange={onEmailChange}
        disabled={disabled}
        css={InputCSS}
        value={email}
        onKeyDown={onKeyDown}
      />

      <div css={controlsCSS}>
        <Button text='Send reset password link' onClick={onClick} disabled={disabled} />
      </div>

      <p css={messageCSS}>{message && message}</p>
    </div>
  );
}

export default ForgotPassword;
