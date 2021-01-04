import ModalHeader from './header';
import ModalBody from './body';
import Button from '../../_common/button';

function ModalContentSubscriptionCancel() {
  function onCancel() {
    console.log('on cancel!');
  }
  return (
    <div>
      <ModalHeader text='Cancel subscription' />
      <ModalBody>
        <p>Are you sure you want to cancel your active subscription?</p>
        <Button size='small' text='Yes, please cancel' onClick={onCancel} />
      </ModalBody>
    </div>
  );
}

export default ModalContentSubscriptionCancel;
