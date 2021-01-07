import { css } from '@emotion/react/macro';
import AccountBodyHeader from '../body/header';
import AccountBodyContent from '../body/content';

function AccountAffiliate() {
  return (
    <div>
      <AccountBodyHeader heading='Affiliate' />
      <AccountBodyContent>
        Coming soon! In the meantime, send an email to{' '}
        <a href='mailto:hello@wpshop.io'>hello@wpshop.io</a> with any questions you may have.
      </AccountBodyContent>
    </div>
  );
}

export default AccountAffiliate;
