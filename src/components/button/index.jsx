import { jsx, css } from '@emotion/react/macro';
import Loader from 'react-loaders';
import 'loaders.css/src/animations/ball-pulse.scss';

function Button({ text, onClick, disabled }) {
  const ButtonCSS = css`
    padding: 0.6em 1.5em 0.7em;
    color: #fff;
    background-color: #415aff;
    border: none;
    position: relative;
    text-decoration: none;
    font-weight: 500;
    font-size: 17px;
    font-family: Manrope, arial;
    display: inline-block;
    line-height: 1.1;
    border-radius: 0.4em;
    outline: none;
    text-align: center;
    margin: 0.69444em 0 0;
    transition: all 0.18s ease;
    opacity: 1;
    min-width: 106px;

    .loader-hidden {
      display: none;
    }
    .loader-active {
      display: block;
    }

    .ball-pulse > div {
      width: 10px;
      height: 10px;
    }

    &:hover {
      cursor: pointer;
      text-decoration: none;
      opacity: 1;
      color: #fff;
      box-shadow: 0 0 0 0.24em #cad6ff;
      background-color: #2d45e6;

      &[disabled] {
        border: none;
        outline: none;
        box-shadow: none;
        cursor: not-allowed;
        background-color: #415aff;
      }
    }
  `;

  return (
    <button css={ButtonCSS} disabled={disabled} onClick={onClick}>
      {disabled ? <Loader type='ball-pulse' /> : text}
    </button>
  );
}

export default Button;
