import { jsx, css } from '@emotion/react/macro';

function Body() {
  const BodyCSS = css`
    flex: 1;
  `;
  return (
    <main css={BodyCSS}>
      <p>Main</p>
    </main>
  );
}

export default Body;
