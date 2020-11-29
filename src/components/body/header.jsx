import { jsx, css } from '@emotion/react/macro';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/tippy.css'; // optional

function AccountIcon() {
  const AccountIconCSS = css`
    position: absolute;
    left: -38px;
    top: 16px;
  `;

  return (
    <svg width='30' height='30' data-jdenticon-value='Andrew Robbins' css={AccountIconCSS}></svg>
  );
}

function AccountHeaderDropdown() {
  const AccountHeaderDropdownCSS = css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 100px;
  `;

  const AccountHeaderDropdownLinkCSS = css`
    text-decoration: none;
    color: #0f0728;
    text-align: left;
    display: block;
    width: 100%;
    padding: 10px 10px;

    &:hover {
      color: #415aff;
    }
  `;

  function onClick() {
    console.log('on logout click');
  }

  return (
    <ul css={AccountHeaderDropdownCSS}>
      <li>
        <a href='#!' onClick={onClick} css={AccountHeaderDropdownLinkCSS}>
          Settings
        </a>
      </li>
      <li>
        <a href='#!' onClick={onClick} css={AccountHeaderDropdownLinkCSS}>
          Logout
        </a>
      </li>
    </ul>
  );
}

function AccountHeader() {
  const ArrowCSS = css`
    width: 9px;
    height: auto;
    position: relative;
    left: 5px;
    top: 4px;
  `;

  const AccountHeaderCSS = css`
    margin: 0;
    text-align: right;

    .tippy-box[data-theme~='light'] {
      box-shadow: none;
      border: 1px solid #ddd;
    }
  `;

  const AccountHeaderLinkCSS = css`
    text-decoration: none;
    color: #0f0728;
    padding: 20px 0;
    position: relative;
  `;

  function onClick() {
    console.log('on click');
  }

  return (
    <header css={AccountHeaderCSS}>
      <Tippy
        content={<AccountHeaderDropdown />}
        allowHTML={true}
        interactive={true}
        theme='light'
        offset={[0, -5]}
        hideOnClick='toggle'
        arrow={false}>
        <a href='#!' css={AccountHeaderLinkCSS} onClick={onClick}>
          <AccountIcon />
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
