import { css } from '@emotion/react/macro';

import AccountHeader from '../header';
import AccountHome from '../home';
import AccountLicenses from '../licenses';
import AccountSubscriptions from '../subscriptions';
import AccountPurchases from '../purchases';
import AccountDownloads from '../downloads';
import AccountAffiliate from '../affiliate';
import { AccountContext } from '../_state/context';
import { useContext } from 'react';

function Body() {
  const [accountState] = useContext(AccountContext);

  const BodyCSS = css`
    flex: 1;
    padding: 0;
  `;

  const BodyInnerCSS = css`
    padding: 20px 40px;
  `;

  function renderSwitch(activePage) {
    switch (activePage) {
      case 'home':
        return <AccountHome />;

      case 'licenses':
        return <AccountLicenses />;

      case 'subscriptions':
        return <AccountSubscriptions />;

      case 'purchases':
        return <AccountPurchases />;

      case 'downloads':
        return <AccountDownloads />;

      case 'affiliate':
        return <AccountAffiliate />;

      default:
        return <AccountHome />;
    }
  }

  return (
    <main css={BodyCSS}>
      <AccountHeader />
      <div css={BodyInnerCSS}>{renderSwitch(accountState.activePage)}</div>
    </main>
  );
}

export default Body;
