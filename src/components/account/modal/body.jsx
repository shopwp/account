import { css } from '@emotion/react/macro';

function ModalBody({ children }) {
  const ModalBodyCSS = css`
    padding: 15px 20px;
    width: calc(100% - 40px);
  `;

  return <div css={ModalBodyCSS}>{children}</div>;
}

export default ModalBody;
