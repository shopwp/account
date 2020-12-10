import { css } from '@emotion/react/macro';

function Notice({ text, type }) {
  const NoticeCSS = css`
    background-color: ${type === 'success' ? '#c1ffdd' : type === 'info' ? '#eff7ff' : '#f6cdcd'};
    text-align: center;
    padding: 12px 15px 13px 15px;
    line-height: 1;
    border-radius: 4px;
    font-size: 15px;
    color: black;
    display: inline-block;
    font-size: 15px;
    border: 1px solid ${type === 'success' ? '#c1ffdd' : type === 'info' ? '#ccd7ff' : '#f6cdcd'};
  `;

  return <p css={NoticeCSS}>{text}</p>;
}

export default Notice;
