import { css, keyframes } from '@emotion/react/macro';

function Notice({ children, type, global = false }) {
  const fadeIn = keyframes`
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
      }
  `;

  const NoticeCSS = css`
    background-color: ${type === 'success' ? '#c1ffdd' : type === 'info' ? '#eff7ff' : '#f6cdcd'};
    text-align: center;
    padding: 12px 18px 13px 18px;
    line-height: 1;
    border-radius: 4px;
    font-size: 15px;
    color: black;
    display: inline-block;
    font-size: 15px;
    border: 1px solid ${type === 'success' ? '#98e3ba' : type === 'info' ? '#bfcdff' : '#e19393'};
    position: ${global ? 'absolute' : 'static'};
    top: ${global ? '55px' : 'auto'};
    left: ${global ? '50%' : 'auto'};
    transform: ${global ? 'translate(-55px, -50%)' : 'none'};
    animation: ${fadeIn} 0.5s ease;
    animation-iteration-count: 1;
  `;

  return <p css={NoticeCSS}>{children}</p>;
}

export default Notice;
