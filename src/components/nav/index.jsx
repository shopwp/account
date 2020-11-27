import { jsx, css } from '@emotion/react/macro';
import Logo from '../logo';
import MainNav from '../nav-main';

function Nav() {
  const NavCSS = css`
    display: flex;
    width: 270px;
    height: 100vh;
    align-items: flex-start;
    background: #1d144f;
    flex-direction: column;
  `;
  return (
    <nav css={NavCSS}>
      <Logo />
      <MainNav />
    </nav>
  );
}

export default Nav;
