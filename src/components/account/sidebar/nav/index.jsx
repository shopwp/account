import { css } from '@emotion/react/macro';
import {
  IconCopy,
  IconBilling,
  IconPurchaseHistory,
  IconDownload,
  IconSettings,
  IconAffiliate,
  IconHome,
} from '../../../_common/icons';
import { AccountContext } from '../../_state/context';
import { useContext } from 'react';

function Nav() {
  const [accountState, accountDispatch] = useContext(AccountContext);

  const NavCSS = css`
    display: flex;
    flex-direction: column;
    width: 100%;

    a {
      color: #0f0728;
      padding: 15px 50px 15px 25px;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;

      svg {
        width: 16px;
        margin-right: 5px;
        position: relative;
        top: 1px;
      }

      &:hover {
        color: #415aff;
      }
    }
  `;

  function onNavClick(event) {
    accountDispatch({
      type: 'SET_ACTIVE_PAGE',
      payload: event.target.innerText.trim().toLowerCase(),
    });
  }

  return (
    <div css={NavCSS}>
      <a href='#!' onClick={onNavClick}>
        <IconHome /> Home
      </a>
      <a href='#!' onClick={onNavClick}>
        <IconCopy /> Licenses
      </a>
      <a href='#!' onClick={onNavClick}>
        <IconBilling /> Billing
      </a>
      <a href='#!' onClick={onNavClick}>
        <IconPurchaseHistory /> Purchases
      </a>
      <a href='#!' onClick={onNavClick}>
        <IconDownload /> Downloads
      </a>
      <a href='#!' onClick={onNavClick}>
        <IconSettings /> Settings
      </a>
      <a href='#!' onClick={onNavClick}>
        <IconAffiliate /> Affiliate
      </a>
    </div>
  );
}

export default Nav;
