import { css } from '@emotion/react/macro';
import ModalHeader from './header';
import ModalBody from './body';
import Button from '../../_common/button';
import parse from 'html-react-parser';

function ModalContentSubscriptionCancel({ accountState, accountDispatch }) {
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

  function onCancel() {
    console.log('on cancel!', accountState.subscription.cancel_url);
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
          (You will no longer be charged and your license key will be deactivated)
        </small>
        <Button size='small' text='Yes, please cancel' onClick={onCancel} />
      </ModalBody>
    </div>
  );
}

export default ModalContentSubscriptionCancel;
