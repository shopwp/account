import Nav from '../nav';
import Body from '../body';
import { jsx, css } from '@emotion/react/macro';

function Account() {
  const AppCSS = css`
    display: flex;
    font-family: 'Manrope', sans-serif;
  `;

  return (
    <div className='App' css={AppCSS}>
      <Nav />
      <Body />
    </div>
  );
}

export default Account;
