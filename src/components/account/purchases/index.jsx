import { css } from '@emotion/react/macro';
import { useContext } from 'react';
import { AccountContext } from '../_state/context';
import AccountBodyHeader from '../body/header';
import AccountBodyContent from '../body/content';
import Table from '../../_common/tables';
import TableBody from '../../_common/tables/body';
import TableHeader from '../../_common/tables/header';
import Th from '../../_common/tables/header/th';
import Td from '../../_common/tables/body/td';

function Purchase({ purchase, accountDispatch }) {
  function onLicenseClick(e) {
    e.preventDefault();

    accountDispatch({ type: 'SET_ACTIVE_PAGE', payload: 'licenses' });
  }
  return (
    <tr>
      <Td>#{purchase.number}</Td>
      <Td>{purchase.payment_date}</Td>
      <Td>{purchase.details.name === 'WP Shopify' ? 'WP Shopify Pro' : purchase.details.name}</Td>
      <Td>${purchase.details.price}</Td>
      <Td>${purchase.details.discount}</Td>
      <Td>
        <a href={purchase.receipt_url} target='_blank'>
          View receipt
        </a>
      </Td>
      <Td>
        <a href='#!' onClick={onLicenseClick}>
          View license
        </a>
      </Td>
    </tr>
  );
}

function Purchases({ purchases }) {
  const [accountState, accountDispatch] = useContext(AccountContext);

  const PurchasesTableCSS = css`
    width: 100%;
    max-width: 100%;
  `;

  console.log('purchases', purchases);

  return (
    <Table extraCSS={PurchasesTableCSS}>
      <TableHeader>
        <Th>Number</Th>
        <Th>Date</Th>
        <Th>Name</Th>
        <Th>Discount</Th>
        <Th>Paid Amount</Th>
        <Th>Receipt</Th>
        <Th>License</Th>
      </TableHeader>
      <TableBody>
        {purchases.map((purchase) => (
          <Purchase purchase={purchase} key={purchase.number} accountDispatch={accountDispatch} />
        ))}
      </TableBody>
    </Table>
  );
}

function AccountPurchases() {
  const [accountState, accountDispatch] = useContext(AccountContext);

  const SubscriptionActionCSS = css`
    color: black;
    padding: 4px 0;
    display: block;
    position: relative;

    &:hover {
      color: #415aff;
    }
  `;

  return (
    <div>
      <AccountBodyHeader heading='Purchases' />
      {accountState.customer && (
        <AccountBodyContent>
          <Purchases purchases={accountState.customer.purchases} />
        </AccountBodyContent>
      )}
    </div>
  );
}

export default AccountPurchases;
