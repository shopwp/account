import { css } from '@emotion/react/macro';

function Table({ children, extraCSS }) {
  const stylesTable = css`
    width: 100%;
    border: 1px solid #e7e7e7;
    border-collapse: collapse;
    border-spacing: 0;
    opacity: 1;
    max-width: 500px;

    tr:nth-of-type(even) {
      background: #f8f8f8;
    }
  `;

  return (
    <table css={[stylesTable, extraCSS]} className='wpshopify-table'>
      {children}
    </table>
  );
}

export default Table;
