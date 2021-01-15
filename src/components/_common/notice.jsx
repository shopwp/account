import { css, keyframes } from '@emotion/react/macro';
import { IconWarning, IconError, IconInfo, IconSuccess } from './icons';
import React from 'react';

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
    background-color: ${type === 'success'
      ? '#c1ffdd'
      : type === 'info'
      ? '#eff7ff'
      : type === 'error'
      ? '#f6cdcd'
      : type === 'warning'
      ? '#ffedcd'
      : '#eff7ff'};
    text-align: center;
    padding: 12px 20px 13px 40px;
    line-height: 1;
    border-radius: 4px;
    font-size: 15px;
    color: black;
    display: inline-block;
    font-size: 15px;
    border: 1px solid
      ${type === 'success'
        ? '#98e3ba'
        : type === 'info'
        ? '#bfcdff'
        : type === 'error'
        ? '#e19393'
        : type === 'warning'
        ? '#f7c978'
        : '#bfcdff'};
    position: ${global ? 'absolute' : 'relative'};
    top: ${global ? '55px' : 'auto'};
    left: ${global ? 'calc(50% - 120px)' : 'auto'};
    transform: ${global ? 'translate(calc(-50% + 120px), -50%)' : 'none'};
    animation: ${fadeIn} 0.5s ease;
    animation-iteration-count: 1;

    svg {
      position: absolute;
      left: 14px;
      top: 11px;
      width: 18px;
      height: 18px;
      display: inline-block;
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
