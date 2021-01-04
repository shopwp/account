import { css } from '@emotion/react/macro';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/tippy.css'; // optional
import { useContext } from 'react';
import { AccountContext } from '../_state/context';

function AccountIcon({ avatar }) {
  const AccountIconCSS = css`
    position: absolute;
    left: -45px;
    padding: 1px;
    top: 14px;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    width: 30px;
    height: 30px;
  `;

  return avatar ? (
    <img src={avatar} css={AccountIconCSS} />
  ) : (
    <svg width='30' height='30' data-jdenticon-value='wps' css={AccountIconCSS}></svg>
  );
}

function AccountHeaderDropdown({ pages }) {
  const AccountHeaderDropdownCSS = css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 182px;

    li:first-of-type a {
      padding-bottom: 7px;
    }

    li:last-of-type a {
      padding-top: 7px;
    }
  `;

  const AccountHeaderDropdownLinkCSS = css`
    text-decoration: none;
    color: #0f0728;
    text-align: left;
    display: block;
    width: calc(100% - 40px);
    padding: 15px 20px;
    font-weight: bold;

    svg {
      position: relative;
      top: 3px;
      margin-right: 5px;
    }

    &:hover {
      color: #415aff;
    }
  `;

  function onLogout() {
    localStorage.removeItem('wpshopify-account-auth-token');
    window.location.href = '/login';
  }

  return (
    <ul css={AccountHeaderDropdownCSS}>
      <AccountDropdownPages pages={[{ title: 'settings', link: '/' }]} />
      <li>
        <a href='#!' onClick={onLogout} css={AccountHeaderDropdownLinkCSS}>
          <svg
            focusable='false'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            width='15'>
            <path
              fill='currentColor'
              d='M160 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l141.6 143.1c6.3 6.3 6.3 16.4 0 22.7L333.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H176c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l141.7-143c18.8-18.8 18.8-49.2 0-68L356.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H176c-26.5 0-48 21.6-48 48zM0 112v288c0 26.5 21.5 48 48 48h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48C21.5 64 0 85.5 0 112z'></path>
          </svg>
          Logout
        </a>
      </li>
    </ul>
  );
}

function AccountDropdownPages({ pages }) {
  return pages.map((page) => <AccountDropdownPage key={page.title} page={page} />);
}

function AccountDropdownPage({ page }) {
  const linkCSS = css`
    text-decoration: none;
    color: #0f0728;
    text-align: left;
    display: block;
    width: calc(100% - 40px);
    padding: 15px 20px;
    text-transform: capitalize;
    font-weight: bold;

    svg {
      position: relative;
      top: 3px;
      margin-right: 5px;
    }

    &:hover {
      color: #415aff;
      cursor: pointer;
    }
  `;

  return (
    <li>
      <a href={page.link} css={linkCSS}>
        {page.title}
      </a>
    </li>
  );
}

function AccountHeader() {
  const [accountState] = useContext(AccountContext);

  const ArrowCSS = css`
    width: 9px;
    height: auto;
    position: relative;
    left: 5px;
    top: 4px;
  `;

  const AccountHeaderCSS = css`
    margin: 0;
    padding: 23px 30px;
    background: white;
    width: calc(100% - 60px);
    text-align: right;
    border-bottom: 1px solid #e3e8ee;

    .tippy-box[data-theme~='light'] {
      box-shadow: none;
      border: 1px solid #ddd;
    }

    .tippy-content {
      padding: 0;
    }
  `;

  const AccountHeaderLinkCSS = css`
    text-decoration: none;
    color: #0f0728;
    padding: 20px 0;
    position: relative;
    font-weight: bold;
    font-size: 15px;
  `;

  function onClick() {
    console.log('on click');
  }

  return (
    <header css={AccountHeaderCSS}>
      <Tippy
        content={<AccountHeaderDropdown pages={accountState.pages} />}
        allowHTML={true}
        interactive={true}
        theme='light'
        offset={[-18, -5]}
        hideOnClick='toggle'
        arrow={false}>
        <a href='#!' css={AccountHeaderLinkCSS} onClick={onClick}>
          <AccountIcon avatar={accountState.customer ? accountState.customer.info.avatar : false} />
          Andrew Robbins{' '}
          <svg
            css={ArrowCSS}
            focusable='false'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 256 512'>
            <path
              fill='currentColor'
              d='M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z'></path>
          </svg>
        </a>
      </Tippy>
    </header>
  );
}

export default AccountHeader;
