import { css } from '@emotion/react/macro';

function Th({ children, extraCSS, align, colspan }) {
  const styles = css`
    textalign: ${align ? align : 'left'};
    padding: 15px;
    border: 1px solid #e7e7e7;
  `;

  return (
    <th colSpan={colspan} css={[styles, extraCSS]} className='wpshopify-table-header-cell'>
      {children}
    </th>
  );
}

export default Th;
