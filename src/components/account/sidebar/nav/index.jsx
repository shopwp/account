import { css } from '@emotion/react/macro';
import {
  IconCopy,
  IconBilling,
  IconPurchaseHistory,
  IconDownload,
  IconAffiliate,
  IconHome,
} from '../../../_common/icons';
import { AccountContext } from '../../_state/context';
import { useContext } from 'react';

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
