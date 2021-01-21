import { jsx, css } from '@emotion/react/macro';
import Logo from '../_common/logo';

function LoginFooter() {
  const LoginFooterCSS = css`
    margin: 0;
    width: calc(100% - 80px);
    padding: 10px 40px;
  `;

  const LoginFooterWrapperCSS = css`
    max-width: 1050px;
    position: relative;
    left: 50px;
    flex: 1;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    display: flex;
    padding-top: 20px;
  `;

  const LoginFooterCol = css`
    width: 20%;
    margin-top: 0;
  `;

  const LoginFooterHeading = css`
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    line-height: 1.1;
    color: #0f0728;
    font-family: IBM Plex Sans, helvetica;
  `;

  const LoginFooterLinks = css`
    list-style: none;
    margin: 0;
    padding: 0;
  `;

  const LoginFooterLink = css`
    color: #1f1f23;
    width: 100%;
    display: block;
    text-align: left;
    font-size: 14px;
    padding: 0.3em 1.5em 0.3em 0;
    position: relative;
    border: none;
    text-decoration: none;
    font-family: Manrope, arial;

    &:hover {
      text-decoration: underline;
    }
  `;

  const LoginFooterAttrCSS = css`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  `;

  return (
    <footer css={LoginFooterCSS}>
      <nav css={LoginFooterWrapperCSS}>
        <div css={LoginFooterCol}>
          <h3 css={LoginFooterHeading}>The Plugin</h3>
          <div className='menu-footer-1-container'>
            <ul css={LoginFooterLinks}>
              <li>
                <a css={LoginFooterLink} href='https://wpshop.io/how/'>
                  How it works
                </a>
              </li>
              <li>
                <a css={LoginFooterLink} href='https://wpshop.io/features/'>
                  Features
                </a>
              </li>
              <li>
                <a css={LoginFooterLink} href='https://wpshop.io/examples/'>
                  Example sites
                </a>
              </li>
              <li>
                <a css={LoginFooterLink} href='https://wpshop.io/purchase/'>
                  Purchase
                </a>
              </li>
              <li>
                <a css={LoginFooterLink} href='https://wpshop.io/try/'>
                  Try for Free
                </a>
              </li>
              <li>
                <a css={LoginFooterLink} href='https://demo.wpshop.io'>
                  Demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div css={LoginFooterCol}>
          <h3 css={LoginFooterHeading}>Company</h3>
          <div className='menu-footer-2-container'>
            <ul css={LoginFooterLinks}>
              <li>
                <a css={LoginFooterLink} href='https://wpshop.io/blog/'>
                  Blog
                </a>
              </li>
              <li>
                <a css={LoginFooterLink} href='https://wpshop.io/become-an-affiliate/'>
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a css={LoginFooterLink} href='https://wpshop.io/changelog/'>
                  Changelog
                </a>
              </li>
              <li>
                <a css={LoginFooterLink} href='https://www.couponupto.com/coupons/wp-shopify'>
                  Couponupto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div css={LoginFooterCol}>
          <h3 css={LoginFooterHeading}>Support</h3>
          <div className='menu-footer-3-container'>
            <ul css={LoginFooterLinks}>
              <li>
                <a css={LoginFooterLink} href='https://wpshop.io/contact/'>
                  Contact
                </a>
              </li>
              <li>
                <a css={LoginFooterLink} href='https://wpshop.io/faq/'>
                  FAQ
                </a>
              </li>
              <li>
                <a css={LoginFooterLink} href='https://docs.wpshop.io'>
                  Docs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div css={LoginFooterCol}>
          <h3 css={LoginFooterHeading}>Account</h3>
          <div className='menu-footer-4-container'>
            <ul css={LoginFooterLinks}>
              <li>
                <a css={LoginFooterLink} href='https://wpshop.io/affiliate-login/'>
                  Affiliate Login
                </a>
              </li>
              <li>
                <a css={LoginFooterLink} href='https://wpshop.io/login/'>
                  Customer Login
                </a>
              </li>
              <li>
                <a css={LoginFooterLink} href='https://wpshop.io/forgot-password/'>
                  Forgot Password
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div css={LoginFooterCol}>
          <h3 css={LoginFooterHeading}>Contact</h3>
          <div className='menu-footer-5-container'>
            <ul css={LoginFooterLinks}>
              <li>
                <a css={LoginFooterLink} href='mailto:hello@wpshop.io'>
                  hello@wpshop.io
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section css={LoginFooterAttrCSS}>
        <Logo color='#0f0728' width='25px' height='25px' />
        <small>© 2021 WP Shopfiy</small>
      </section>
    </footer>
  );
}

export default LoginFooter;
