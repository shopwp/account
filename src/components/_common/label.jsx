import { css } from '@emotion/react/macro';

function Label({ text, hasBorder }) {
  const LabelCSS = css`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    margin-top: 30px;
    border-bottom: ${hasBorder === false ? 'none' : '1px solid #e3e8ee'};
    padding-bottom: 10px;
  `;

  return <h3 css={LabelCSS}>{text}</h3>;
}

export default Label;
