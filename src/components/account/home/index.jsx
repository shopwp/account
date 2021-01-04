import AccountBodyHeader from '../body/header';
import AccountBodyContent from '../body/content';
import { css } from '@emotion/react/macro';
import { useContext } from 'react';
import { AccountContext } from '../_state/context';
import { SectionCSS } from '../../_common/styles';
import Label from '../../_common/label';
import Table from '../../_common/tables';
import TableBody from '../../_common/tables/body';
import TableHeader from '../../_common/tables/header';
import Td from '../../_common/tables/body/td';
import Th from '../../_common/tables/header/th';
import prettyDate from '../../_common/date';
import Button from '../../_common/button';
import { IconEdit } from '../../_common/icons';

function AccountHome() {
  const [accountState, accountDispatch] = useContext(AccountContext);

  const NameCSS = css`
    font-size: 20px;
    margin: 0;
    font-weight: bold;
  `;

  const EmailCSS = css`
    margin-top: 5px;
  `;

  const editCSS = css`
    position: absolute;
    top: -43px;
    right: 0;
  `;

  const editThCSS = css`
    border: none;
    padding: 0;
  `;

  function onProfileEdit(e) {
    e.preventDefault();

    accountDispatch({ type: 'SET_ACTIVE_MODAL_VIEW', payload: 'profileUpdate' });
    accountDispatch({ type: 'TOGGLE_MODAL', payload: true });
  }

  return (
    <div>
      <AccountBodyHeader heading='👋 Good to see you again' />
      {accountState.customer && (
        <AccountBodyContent>
          <p css={NameCSS}>{accountState.customer.info.name}</p>
          <p css={EmailCSS}>{accountState.customer.info.email}</p>

          <div css={SectionCSS}>
            <Label text='Profile:' hasBorder={false} />

            <Table extraCSS={editThCSS}>
              <TableHeader>
                <Th extraCSS={editThCSS}>
                  <Button
                    text='Edit'
                    type='secondary'
                    onClick={onProfileEdit}
                    extraCSS={editCSS}
                    icon={<IconEdit />}
                  />
                </Th>
              </TableHeader>
              <TableBody>
                <tr>
                  <Td>Name</Td>
                  <Td>{accountState.customer.info.name}</Td>
                </tr>
                <tr>
                  <Td>Email</Td>
                  <Td>{accountState.customer.info.email}</Td>
                </tr>
                <tr>
                  <Td>Password</Td>
                  <Td>
                    &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
                  </Td>
                </tr>
              </TableBody>
            </Table>
          </div>

          <div css={SectionCSS}>
            <Label text='Details:' hasBorder={false} />
            <Table>
              <TableBody>
                <tr>
                  <Td>Joined</Td>
                  <Td>{prettyDate(accountState.customer.info.joined)}</Td>
                </tr>
                <tr>
                  <Td>Purchase count</Td>
                  <Td>{accountState.customer.info.purchase_count}</Td>
                </tr>
                <tr>
                  <Td>Amount spent</Td>
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
