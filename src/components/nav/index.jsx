import { jsx, css } from '@emotion/react/macro';
import Logo from '../logo';
import MainNav from '../nav-main';

function Nav() {
  const NavCSS = css`
    display: flex;
    width: 240px;
    height: 100vh;
    align-items: flex-start;
    background: #f3f5fe;
    flex-direction: column;
  `;
  return (
    <nav css={NavCSS}>
      <Logo color='#415aff' width='40px' height='40px' />
      <MainNav />
    </nav>
  );
}

export default Nav;
