import { css } from '@emotion/react/macro';

function AccountBodyHeader({ heading }) {
  const PageHeadingCSS = css`
    font-size: 28px;
  `;
  return <h1 css={PageHeadingCSS}>{heading}</h1>;
}

export default AccountBodyHeader;
