import { css } from '@emotion/react/macro';
import ModalHeader from './header';
import ModalBody from './body';
import Button from '../../_common/button';
import Input from '../../_common/forms/input';
import Select from '../../_common/forms/select';
import InputGroup from '../../_common/forms/input-group';
import Notice from '../../_common/notice';
import { useState } from 'react';
import { updatePaymentMethod } from '../../_common/api';
import to from 'await-to-js';

function ModalContentPaymentUpdate({ accountState, accountDispatch }) {
  const [isBusy, setIsBusy] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCVC] = useState('');
  const [nameOnCard, setNameOnCard] = useState(accountState.subscription.card_info.name);
  const [monthExp, setMonthExp] = useState('');
  const [yearExp, setYearExp] = useState('');

  const selectInlineCSS = css`
    display: flex;

    > div {
      margin-right: 10px;
    }
  `;

  const ExpDividerCSS = css`
    display: block;
    margin: 0 10px 0 4px;
    font-size: 22px;
  `;

  const SecurityCodeCSS = css`
    max-width: 50px;
  `;

  async function onUpdate() {
    setIsBusy(true);
    console.log('on payment update!', accountState.subscription);
    const [error, resp] = await to(
      updatePaymentMethod({ subscription: accountState.subscription })
    );
    setIsBusy(false);

    console.log('error', error);
    console.log('resp', resp);

    //  accountDispatch({
    //    type: 'SET_SUBSCRIPTIONS',
    //    payload: resp,
    //  });

    //  accountDispatch({ type: 'TOGGLE_MODAL', payload: false });

    //  accountDispatch({
    //    type: 'SET_NOTICE',
    //    payload: {
    //      message: 'Successfully canceled subscription to ' + parse(accountState.subscription.name),
    //      type: 'success',
    //    },
    //  });

    //  setTimeout(function () {
    //    accountDispatch({
    //      type: 'SET_NOTICE',
    //      payload: false,
    //    });
    //  }, 5500);
  }

  function onCardNumberChange(e) {
    setCardNumber(e.target.value);
  }

  function onCVCChange(e) {
    setCVC(e.target.value);
  }

  function nameOnCardChange(e) {
    setNameOnCard(e.target.value);
  }

  function onMonthExpirationChange(e) {
    console.log('onMonthExpirationChange ', e.target.value);
  }

  function onYearExpirationChange(e) {
    console.log('onYearExpirationChange ', e.target.value);
  }

  return (
    <div>
      <ModalHeader text='Update payment method' />
      <ModalBody>
        <Notice type='info' multiLine={true}>
          You will be replacing your current credit card on file (••••{' '}
          {accountState.subscription.card_info.last4}) with a new one below. You will not be charged
          for updating the payment method.
        </Notice>
        <InputGroup>
          <p>Name on Card:</p>
          <Input val={nameOnCard} onChange={nameOnCardChange} disabled={isBusy} />
        </InputGroup>

        <InputGroup>
          <p>Card Number:</p>
          <Input
            placeholder='4242 4242 4242 4242'
            val={cardNumber}
            onChange={onCardNumberChange}
            disabled={isBusy}
            type='tel'
            pattern='^[0-9!@#$%^&* ]*$'
            autocomplete='off'
          />
        </InputGroup>

        <InputGroup>
          <p>Security Code:</p>
          <Input
            extraCSS={SecurityCodeCSS}
            placeholder='123'
            val={cvc}
            onChange={onCVCChange}
            disabled={isBusy}
            type='tel'
            pattern='[0-9]{3,4}'
          />
        </InputGroup>

        <InputGroup>
          <p>Expiration Date:</p>
          <div css={selectInlineCSS}>
            <Select onChange={onMonthExpirationChange} disabled={isBusy} val={monthExp}>
              <option value=''>MM</option>
              <option value='01'>01 - January</option>
              <option value='02'>02 - February</option>
              <option value='03'>03 - March</option>
              <option value='04'>04 - April</option>
              <option value='05'>05 - May</option>
              <option value='06'>06 - June</option>
              <option value='07'>07 - July</option>
              <option value='08'>08 - August</option>
              <option value='09'>09 - September</option>
              <option value='10'>10 - October</option>
              <option value='11'>11 - November</option>
              <option value='12'>12 - December</option>
            </Select>
            <span css={ExpDividerCSS}>/</span>
            <Select onChange={onYearExpirationChange} disabled={isBusy} val={yearExp}>
              <option value=''>YY</option>
              <option value='21'>21</option>
              <option value='22'>22</option>
              <option value='23'>23</option>
              <option value='24'>24</option>
              <option value='25'>25</option>
              <option value='26'>26</option>
              <option value='27'>27</option>
              <option value='28'>28</option>
              <option value='29'>29</option>
            </Select>
          </div>
        </InputGroup>

        <Button size='small' text='Update Payment Method' onClick={onUpdate} disabled={isBusy} />
      </ModalBody>
    </div>
  );
}

export default ModalContentPaymentUpdate;
