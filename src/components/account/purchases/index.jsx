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
import { ContentLoaderBullet } from '../../_common/content-loaders';
import React from 'react';
import { Link } from 'react-router-dom';

function Purchase({ purchase }) {
  return (
    <tr>
      <Td>#{purchase.number}</Td>
      <Td>{purchase.payment_date}</Td>
      <Td>{purchase.details.name === 'WP Shopify' ? 'WP Shopify Pro' : purchase.details.name}</Td>
      <Td>${purchase.details.discount}</Td>
      <Td>${purchase.details.price}</Td>
      <Td>
        <a href={purchase.receipt_url} target='_blank' rel='noreferrer'>
          View receipt
        </a>
      </Td>
      <Td>
        <Link to='/licenses'>View license</Link>
      </Td>
    </tr>
  );
}

function Purchases({ purchases }) {
  const PurchasesTableCSS = css`
    width: 100%;
    max-width: 100%;
  `;

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
          <Purchase purchase={purchase} key={purchase.number} />
        ))}
      </TableBody>
    </Table>
  );
}

function AccountPurchases() {
  const [accountState] = useContext(AccountContext);

  return (
    <>
      <AccountBodyHeader heading='Purchases' />
      <AccountBodyContent>
        {accountState.customer ? (
          <Purchases purchases={accountState.customer.purchases} />
        ) : (
          <ContentLoaderBullet />
        )}
      </AccountBodyContent>
    </>
  );
}

export default AccountPurchases;
