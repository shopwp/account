import { css } from '@emotion/react/macro';
import { ButtonCSS } from '../styles';

function ButtonLink({ text, href, download = false, icon = false }) {
  const IconCSS = css`
    svg {
      margin-left: 10px;
    }
  `;

  return (
    <a href={href} css={[ButtonCSS, IconCSS]} download={download}>
      {text}
      {icon && icon}
    </a>
  );
}

export default ButtonLink;
