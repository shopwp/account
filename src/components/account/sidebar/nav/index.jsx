import { css } from '@emotion/react/macro';
import {
  IconCopy,
  IconBilling,
  IconPurchaseHistory,
  IconDownload,
  IconAffiliate,
  IconHome,
  IconExternal,
} from '../../../_common/icons';
import { AccountContext } from '../../_state/context';
import { useContext } from 'react';

function NavLinksSecondary() {
  const NavLinksSecondaryCSS = css`
    margin-top: 10px;
    border-top: 1px solid #e3e8ee;
    padding-top: 10px;

    a {
      text-decoration: none;
      font-size: 14px;
      text-transform: capitalize;
      display: block;
      color: #323232;
      padding: 5px 50px 10px 25px;

      &:hover {
        color: #415aff;
      }
    }
  `;
  return (
    <div css={NavLinksSecondaryCSS}>
      <a
        href='https://join.slack.com/t/wpshopify/shared_invite/zt-kjc3ptom-WEOiTGaqgdhrFF1IXbUsKA'
        target='_blank'
        rel='noreferrer'>
        Open Slack channel <IconExternal />
      </a>
      <a href='https://wpshop.io/contact' target='_blank' rel='noreferrer'>
        Contact <IconExternal />
      </a>
    </div>
  );
}

function Nav() {
  const [accountState] = useContext(AccountContext);

  const NavCSS = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
  `;

  return (
    <div css={NavCSS}>
      <NavLinks links={accountState.pages} />
      <NavLinksSecondary />
    </div>
  );
}

function NavLinks({ links }) {
  return links.map((link) => <NavLink key={link.title} link={link} />);
}

function NavLink({ link }) {
  const [accountState, accountDispatch] = useContext(AccountContext);

  const NavLinkCSS = css`
    color: ${link.title === accountState.activePage ? '#415aff' : '#0f0728'};
    padding: 15px 50px 15px 25px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;

    svg {
      width: 16px;
      margin-right: 5px;
      position: relative;
      top: 1px;
    }

    &:hover {
      color: #415aff;
    }
  `;

  function onClick(event) {
    accountDispatch({
      type: 'SET_ACTIVE_PAGE',
      payload: link.title,
    });
  }

  function getLinkIcon() {
    switch (link.title) {
      case 'home':
        return <IconHome />;
      case 'licenses':
        return <IconCopy />;

      case 'subscriptions':
        return <IconBilling />;

      case 'purchases':
        return <IconPurchaseHistory />;

      case 'downloads':
        return <IconDownload />;

      case 'affiliate':
        return <IconAffiliate />;

      default:
        return <IconHome />;
    }
  }

  return (
    <a href='#!' css={NavLinkCSS} onClick={onClick}>
      {getLinkIcon()} {link.title}
    </a>
  );
}

export default Nav;
