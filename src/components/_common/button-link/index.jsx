import { jsx, css } from '@emotion/react/macro';
import { ButtonCSS } from '../styles';

function ButtonLink({ text, href }) {
  return (
    <a href={href} css={ButtonCSS}>
      {text}
    </a>
  );
}

export default ButtonLink;
