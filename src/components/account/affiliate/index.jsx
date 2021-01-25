import AccountBodyHeader from '../body/header';
import AccountBodyContent from '../body/content';
import Notice from '../../_common/notice';
import React from 'react';

function AccountAffiliate() {
  return (
    <>
      <AccountBodyHeader heading='Affiliate' />
      <AccountBodyContent>
        <Notice type='info'>
          Coming soon! Please send an email to{' '}
          <a href='mailto:hello@wpshop.io' target='_blank' rel='noreferrer'>
            hello@wpshop.io
          </a>{' '}
          with any questions you may have about your affiliate account.
        </Notice>
      </AccountBodyContent>
    </>
  );
}

export default AccountAffiliate;
