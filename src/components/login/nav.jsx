import { css } from '@emotion/react/macro';
import Logo from '../_common/logo';
import ButtonLink from '../_common/button-link';

function LoginNav() {
  const LoginNavCSS = css`
    display: flex;
    width: 100%;
    align-items: center;
  `;

  const LoginNavLinks = css`
    display: flex;
    justify-content: center;
    flex: 1;
    padding-left: 10%;
  `;

  const LoginNavLinkCSS = css`
    padding: 0.9em 1.3em;
    border-radius: 0.3em;
    font-weight: 700;
    color: #1f1f23;
    font-size: 19px;
    margin: 0 0.3em;
    text-decoration: none;
    font-family: Manrope, arial;

    &:hover {
      color: #415aff;
    }
  `;

  const LoginNavLoginCSS = css`
    text-decoration: none;
    margin: 0 0 0 0;
    border: none;
    text-decoration: none;
    font-size: 1em;
    color: #0f0311;
    padding: 1.2em 1.1em;
  `;

  return (
    <nav css={LoginNavCSS}>
      <Logo color='#415aff' />
      <nav css={LoginNavLinks}>
        <a href='https://wpshop.io' css={LoginNavLinkCSS}>
          The Plugin
        </a>
        <a href='https://wpshop.io/purchase' css={LoginNavLinkCSS}>
          Pricing
        </a>
        <a href='https://demo.wpshop.io' css={LoginNavLinkCSS}>
          Demo
        </a>
        <a href='https://wpshop.io/faq' css={LoginNavLinkCSS}>
          FAQ
        </a>
        <a href='https://wpshop.io/contact' css={LoginNavLinkCSS}>
          Contact
        </a>
      </nav>
      <ButtonLink href='https://wpshop.io/try' text='Start for free' />
      <a href='/login' css={LoginNavLoginCSS}>
        Log In
      </a>
    </nav>
  );
}

export default LoginNav;
