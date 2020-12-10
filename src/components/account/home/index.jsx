import AccountBodyHeader from '../body/header';
import AccountBodyContent from '../body/content';
import { css } from '@emotion/react/macro';
import { useContext } from 'react';
import { AccountContext } from '../_state/context';
import { SectionCSS } from '../../_common/styles';
import Label from '../../_common/label';
import Table from '../../_common/tables';
import TableBody from '../../_common/tables/body';
import Td from '../../_common/tables/body/td';
import prettyDate from '../../_common/date';

function AccountHome() {
  const [accountState] = useContext(AccountContext);

  const NameCSS = css`
    font-size: 20px;
    margin: 0;
    font-weight: bold;
  `;

  const EmailCSS = css`
    margin-top: 5px;
  `;

  const DetailsCSS = css`
    list-style: none;
    margin: 0;
    padding: 0;
  `;

  const DetailCSS = css`
    margin-bottom: 10px;
  `;

  const DetailLabelCSS = css`
    min-width: 200px;
    display: inline-block;
  `;

  const DetailValueCSS = css`
    color: #415aff;
  `;

  return (
    <div>
      <AccountBodyHeader heading='Home' />
      {accountState.customer && (
        <AccountBodyContent>
          <p css={NameCSS}>{accountState.customer.info.name}</p>
          <p css={EmailCSS}>{accountState.customer.info.email}</p>

          <div css={SectionCSS}>
            <Label text='Details:' hasBorder={false} />
            <Table>
              <TableBody>
                <tr>
                  <Td>Joined:</Td>
                  <Td>{prettyDate(accountState.customer.info.joined)}</Td>
                </tr>
                <tr>
                  <Td>Purchase count:</Td>
                  <Td>{accountState.customer.info.purchase_count}</Td>
                </tr>
                <tr>
                  <Td>Amount spent:</Td>
                  <Td>${accountState.customer.info.purchase_value}</Td>
                </tr>
              </TableBody>
            </Table>
          </div>
        </AccountBodyContent>
      )}
    </div>
  );
}

export default AccountHome;
