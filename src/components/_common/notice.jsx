import { css, keyframes } from '@emotion/react/macro';
import { IconWarning, IconError, IconInfo, IconSuccess } from './icons';
import React from 'react';

function Notice({ children, type, global = false, multiLine = false }) {
  const fadeIn = keyframes`
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
      }
  `;

  const NoticeCSS = css`
    width: auto;
    max-width: ${global ? '560px' : '100%'};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${type === 'success'
      ? '#c1ffdd'
      : type === 'info'
      ? '#eff7ff'
      : type === 'error'
      ? '#f6cdcd'
      : type === 'warning'
      ? '#ffedcd'
      : '#eff7ff'};
    padding: 12px 20px;
    line-height: ${multiLine ? 1.4 : 1};
    border-radius: 4px;
    font-size: 15px;
    color: black;
    font-size: 15px;
    border: 1px solid
      ${type === 'success'
        ? '#7acea0'
        : type === 'info'
        ? '#bfcdff'
        : type === 'error'
        ? '#e19393'
        : type === 'warning'
        ? '#f7c978'
        : '#bfcdff'};
    position: ${global ? 'absolute' : 'relative'};
    top: ${global ? '50px' : 'auto'};
    left: ${global ? 'calc(50% - 120px)' : 'auto'};
    transform: ${global ? 'translate(calc(-50% + 120px), -50%)' : 'none'};
    animation: ${fadeIn} 0.5s ease;
    animation-iteration-count: 1;

    + h1 {
      margin-top: ${global ? '130px' : 'auto'};
    }

    svg {
      width: 18px;
      height: 18px;
      display: inline-block;
      margin-right: 8px;
      position: relative;
      top: 1px;
    }
  `;

  return (
    <p css={NoticeCSS}>
      {type === 'warning' ? (
        <>
          <IconWarning /> {children}
        </>
      ) : type === 'error' ? (
        <>
          <IconError /> {children}
        </>
      ) : type === 'info' ? (
        <>
          <IconInfo /> {children}
        </>
      ) : type === 'success' ? (
        <>
          <IconSuccess /> {children}
        </>
      ) : (
        children
      )}
    </p>
  );
}

export default Notice;
