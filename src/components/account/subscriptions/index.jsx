import { css } from '@emotion/react/macro';
import AccountBodyHeader from '../body/header';
import { useContext } from 'react';
import { AccountContext } from '../_state/context';
import AccountBodyContent from '../body/content';
import Table from '../../_common/tables';
import Notice from '../../_common/notice';
import TableBody from '../../_common/tables/body';
import TableHeader from '../../_common/tables/header';
import Th from '../../_common/tables/header/th';
import Td from '../../_common/tables/body/td';
import prettyDate from '../../_common/date';
import { StatusCSS } from '../../_common/styles';

function Subscription({ subscription }) {
  console.log('subscription', subscription);

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

  function openPaymentUpdateModal(e) {
    e.preventDefault();

    accountDispatch({ type: 'SET_ACTIVE_MODAL_VIEW', payload: 'paymentUpdate' });
    accountDispatch({ type: 'TOGGLE_MODAL', payload: true });
  }

  function openSubscriptionCancelModal(e) {
    e.preventDefault();

    accountDispatch({ type: 'SET_ACTIVE_MODAL_VIEW', payload: 'subscriptionCancel' });
    accountDispatch({ type: 'TOGGLE_MODAL', payload: true });
  }

  return (
    <tr>
      <Td>
        <p dangerouslySetInnerHTML={{ __html: subscription.name }}></p>
      </Td>
      <Td>
        ${subscription.recurring_amount} / {subscription.period}
      </Td>
      <Td extraCSS={StatusCSS(subscription.status)}>{subscription.status}</Td>
      <Td>{prettyDate(subscription.expiration)}</Td>
      <Td>{subscription.bill_times}</Td>
      <Td>
        <a href='!#' css={SubscriptionActionCSS} onClick={openPaymentUpdateModal}>
          Update payment method
        </a>
        <a href='/' css={SubscriptionActionCSS} onClick={openSubscriptionCancelModal}>
          Cancel subscription
        </a>
      </Td>
    </tr>
  );
}

function Subscriptions({ subscriptions }) {
  const SubscriptionsTableCSS = css`
    width: 100%;
    max-width: 100%;
  `;

  return (
    <Table extraCSS={SubscriptionsTableCSS}>
      <TableHeader>
        <Th>Subscription</Th>
        <Th>Amount</Th>
        <Th>Status</Th>
        <Th>Renewal Date</Th>
        <Th>Times Billed</Th>
        <Th>Actions</Th>
      </TableHeader>
      <TableBody>
        {subscriptions.map((subscription) => (
          <Subscription key={subscription.id} subscription={subscription} />
        ))}
      </TableBody>
    </Table>
  );
}

function AccountSubscriptions() {
  const [accountState] = useContext(AccountContext);

  const purchaseLinkCSS = css`
    margin-left: 8px;
  `;

  console.log('subscriptions', accountState.customer.subscriptions);

  return (
    <div>
      <AccountBodyHeader heading='Subscriptions' />

      {accountState.customer.subscriptions.length ? (
        <AccountBodyContent>
          <Subscriptions subscriptions={accountState.customer.subscriptions} />
        </AccountBodyContent>
      ) : (
        <AccountBodyContent>
          <Notice type='info'>
            No subscriptions found!
            <a href='https://wpshop.io/purchase' target='_blank' css={purchaseLinkCSS}>
              Purchase one today.
            </a>
          </Notice>
        </AccountBodyContent>
      )}
    </div>
  );
}

export default AccountSubscriptions;
