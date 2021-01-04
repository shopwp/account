import { css } from '@emotion/react/macro';

function Input({
  type = 'text',
  placeholder = '',
  val = '',
  onChange,
  icon = false,
  disabled = false,
  label = false,
}) {
  const inputStyles = css`
    width: calc(100% - 26px);
    display: block;
    padding: 8px 13px;
    font-size: 16px;
    border: 1px solid #c0c0c0;
    margin-bottom: 15px;
    border-radius: 5px;

    &[disabled] {
      opacity: 0.5;
      background: #f4f4f4;

      &:hover {
        cursor: not-allowed;
      }
    }
  `;

  const inputWrapperCSS = css`
    position: relative;

    label {
      font-size: 14px;
      margin-bottom: 5px;
      display: block;
      color: #323232;
    }

    svg {
      position: absolute;
      max-width: 20px;
      top: ${label ? '-13px' : '-2px'};
      right: ${label ? '-2px' : '2px'};
      padding: 10px;

      &:hover {
        cursor: pointer;
      }

      path {
        color: #868686;
      }
    }
  `;

  return (
    <div css={inputWrapperCSS}>
      {label && <label>{label}</label>}
      <input
        css={inputStyles}
        type={type}
        placeholder={placeholder}
        value={val}
        onChange={onChange}
        disabled={disabled}
      />

      {icon && icon}
    </div>
  );
}

export default Input;
