import { jsx, css } from '@emotion/react/macro';

function MainNav() {
  const MainNavCSS = css`
    display: flex;
    flex-direction: column;
    width: 100%;

    a {
      color: white;
      padding: 13px;
      text-decoration: none;
      font-size: 18px;
    }
  `;

  return (
    <div css={MainNavCSS}>
      <a href='https://wpshop.io/'>Overview</a>
      <a href='https://wpshop.io/'>Licenses</a>
      <a href='https://wpshop.io/'>Subscriptions</a>
      <a href='https://wpshop.io/'>Downloads</a>
      <a href='https://wpshop.io/try'>Purchase History</a>
      <a href='https://wpshop.io/'>Settings</a>
      <a href='https://wpshop.io/'>Affiliate</a>
    </div>
  );
}

export default MainNav;
