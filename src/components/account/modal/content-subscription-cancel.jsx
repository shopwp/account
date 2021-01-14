import { css } from '@emotion/react/macro';
import ModalHeader from './header';
import ModalBody from './body';
import Button from '../../_common/button';
import parse from 'html-react-parser';
import { cancelSubscription } from '../../_common/api';
import Notice from '../../_common/notice';
import to from 'await-to-js';
import { useState } from 'react';

function ModalContentSubscriptionCancel({ accountState, accountDispatch }) {
  const [isBusy, setIsBusy] = useState(false);
  const pCSS = css`
    max-width: 82%;
    line-height: 1.5;
    margin-top: 10px;
  `;

  const smallCSS = css`
    display: block;
    margin-bottom: 15px;
    line-height: 1.5;
  `;

  async function onCancel() {
    setIsBusy(true);
    console.log('on cancel!', accountState.subscription);
    const [error, resp] = await to(cancelSubscription({ subscription: accountState.subscription }));
    setIsBusy(false);
    console.log('error', error);
    console.log('resp', resp);
  }

  return (
    <div>
      <ModalHeader text='Cancel subscription' />
      <ModalBody>
        <p css={pCSS}>
          Are you sure you want to cancel your subscription to{' '}
          {parse(accountState.subscription.name)}?
        </p>
        <small css={smallCSS}>
          (You will no longer be charged and your license key will be deactivated. This cannot be
          reversed. You will need to purchase a new subscription if you wish to use the plugin
          again. Email us if you have any questions:
          <a href='mailto:hello@wpshop.io' rel='noreferrer' target='_blank'>
            {' '}
            hello@wpshop.io
          </a>
          )
        </small>
        <Button size='small' text='Yes, cancel subscription' onClick={onCancel} disabled={isBusy} />
      </ModalBody>
    </div>
  );
}

export default ModalContentSubscriptionCancel;
