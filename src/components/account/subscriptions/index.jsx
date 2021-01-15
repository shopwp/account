import { css } from '@emotion/react/macro';
import AccountBodyHeader from '../body/header';
import { useContext, useState } from 'react';
import { AccountContext } from '../_state/context';
import AccountBodyContent from '../body/content';
import Table from '../../_common/tables';
import Notice from '../../_common/notice';
import { IconInfo } from '../../_common/icons';
import TableBody from '../../_common/tables/body';
import TableHeader from '../../_common/tables/header';
import Th from '../../_common/tables/header/th';
import Td from '../../_common/tables/body/td';
import prettyDate from '../../_common/date';
import { StatusCSS } from '../../_common/styles';

function Subscription({ subscription }) {
  console.log('<Subscription>', subscription);

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
        <SubscriptionActionLinks subscription={subscription} />
      </Td>
    </tr>
  );
}

function SubscriptionActionLinks({ subscription }) {
  const [, accountDispatch] = useContext(AccountContext);

  function openPaymentUpdateModal(e) {
    e.preventDefault();

    accountDispatch({ type: 'SET_ACTIVE_MODAL_VIEW', payload: 'paymentUpdate' });
    accountDispatch({ type: 'TOGGLE_MODAL', payload: true });
  }

  function openSubscriptionCancelModal(e) {
    e.preventDefault();

    accountDispatch({ type: 'SET_ACTIVE_MODAL_VIEW', payload: 'subscriptionCancel' });
    accountDispatch({ type: 'SET_ACTIVE_SUBSCRIPTION', payload: subscription });
    accountDispatch({ type: 'TOGGLE_MODAL', payload: true });
  }

  function openSubscriptionReactivateModal(e) {
    e.preventDefault();

    accountDispatch({ type: 'SET_ACTIVE_MODAL_VIEW', payload: 'subscriptionReactivate' });
    accountDispatch({ type: 'SET_ACTIVE_SUBSCRIPTION', payload: subscription });
    accountDispatch({ type: 'TOGGLE_MODAL', payload: true });
  }

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
      {subscription.status !== 'cancelled' && (
        <a href='!#' css={SubscriptionActionCSS} onClick={openPaymentUpdateModal}>
          Update payment method
        </a>
      )}

      {subscription.status === 'cancelled' ? (
        subscription.gateway.includes('paypal') ? (
          <PurchaseNewSubscription
            actionCSS={SubscriptionActionCSS}
            onClickCallback={openSubscriptionCancelModal}
          />
        ) : (
          <ReactivateSubscription
            actionCSS={SubscriptionActionCSS}
            onClickCallback={openSubscriptionReactivateModal}
          />
        )
      ) : (
        <CancelSubscription
          actionCSS={SubscriptionActionCSS}
          onClickCallback={openSubscriptionCancelModal}
        />
      )}
    </div>
  );
}

function PurchaseNewSubscription({ actionCSS }) {
  return (
    <a href='https://wpshop.io/purchase' target='_blank' rel='noreferrer' css={actionCSS}>
      Purchase new subscription <IconInfo />
    </a>
  );
}

function ReactivateSubscription({ actionCSS, onClickCallback }) {
  return (
    <a href='!#' onClick={onClickCallback} css={actionCSS}>
      Reactivate subscription
    </a>
  );
}

function CancelSubscription({ actionCSS, onClickCallback }) {
  return (
    <a href='!#' onClick={onClickCallback} css={actionCSS}>
      Cancel subscription
    </a>
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
        <Th>Next Renewal Date</Th>
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

  return (
    <div>
      <AccountBodyHeader heading='Subscriptions' />

      {accountState.subscriptions.length ? (
        <AccountBodyContent>
          <Subscriptions subscriptions={accountState.subscriptions} />
        </AccountBodyContent>
      ) : (
        <AccountBodyContent>
          <Notice type='info'>
            No subscriptions found!
            <a
              href='https://wpshop.io/purchase'
              target='_blank'
              rel='noreferrer'
              css={purchaseLinkCSS}>
              Purchase one today.
            </a>
          </Notice>
        </AccountBodyContent>
      )}
    </div>
  );
}

export default AccountSubscriptions;
