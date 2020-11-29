import { jsx, css } from '@emotion/react/macro';

function MainNav() {
  const MainNavCSS = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;

    a {
      color: #0f0728;
      padding: 8px 20px;
      text-decoration: none;
      font-size: 16px;
      font-weight: bold;
      border-bottom: 1px solid #d6dae8;

      &:hover {
        background: #fff;
      }
    }
  `;

  return (
    <div css={MainNavCSS}>
      <a href='#!'>Overview</a>
      <a href='#!'>Licenses</a>
      <a href='#!'>Subscriptions</a>
      <a href='#!'>Downloads</a>
      <a href='#!'>Purchase History</a>
      <a href='#!'>Settings</a>
      <a href='#!'>Affiliate</a>
    </div>
  );
}

export default MainNav;
