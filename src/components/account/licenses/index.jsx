import AccountBodyHeader from '../body/header';
import AccountBodyContent from '../body/content';
import { useContext, useState } from 'react';
import { AccountContext } from '../_state/context';
import { css } from '@emotion/react/macro';
import { IconCopy, IconRemove } from '../../_common/icons';
import { SectionCSS, StatusCSS } from '../../_common/styles';
import Table from '../../_common/tables';
import TableBody from '../../_common/tables/body';
import Td from '../../_common/tables/body/td';
import Label from '../../_common/label';
import Notice from '../../_common/notice';
import prettyDate from '../../_common/date';
import copy from 'clipboard-copy';
import to from 'await-to-js';

function AccountLicenses() {
  const [accountState] = useContext(AccountContext);

  return (
    <div>
      <AccountBodyHeader heading='Licenses' />

      {accountState.customer && (
        <AccountBodyContent>
          <Licenses licenses={accountState.customer.licenses} />
        </AccountBodyContent>
      )}
    </div>
  );
}

function Licenses({ licenses }) {
  return licenses.map((license, index) => {
    return <License key={license.download_id} license={license} />;
  });
}

function License({ license }) {
  const [isCopyingLicense, setIsCopyingLicense] = useState(false);
  const [copyingLicenseMessage, setCopyingLicenseMessage] = useState('Copy');
  const [key] = useState(license.key);

  const LicenseKeyCSS = css`
    background-color: #eff7ff;
    padding: 10px 12px 8px 12px;
    border-radius: 5px;
    position: relative;
    font-size: 17px;
    width: 337px;
    letter-spacing: 1px;
    position: relative;
    text-align: center;
    top: -3px;
    border: 1px solid #ccd7ff;
    transition: all 0.2s ease;

    &:hover {
      background-color: #d8ecff;
    }

    &:focus {
      border: 1px solid #ccd7ff;
      outline: none;
    }

    svg {
      position: absolute;
      right: -29px;
      top: 7px;
    }
  `;

  const LicenseCSS = css`
    margin-bottom: 1em;
    padding-bottom: 40px;
  `;

  const LicenseNameCSS = css`
    font-size: 22px;
    margin: 0;
    margin-right: 15px;
  `;

  const RowCSS = css`
    display: flex;
    align-items: flex-start;
  `;

  const LicenseKeyCopyCSS = css`
    position: absolute;
    right: -85px;
    min-width: 75px;
    top: -13px;
    font-size: 14px;
    opacity: ${isCopyingLicense ? 1 : 0};
    transform: ${isCopyingLicense ? 'translateY(10px)' : 'translateY(20px)'};
    transition: all 0.2s ease;
  `;

  const LicenseKeyMeta = css`
    display: flex;
    margin-left: 11px;
    position: relative;
    margin-top: 7px;
  `;

  console.log('license', license);

  function onMouseEnter(e) {
    setIsCopyingLicense(true);
  }

  function onMouseLeave(e) {
    setIsCopyingLicense(false);
    setCopyingLicenseMessage('Copy');
    //  document.selection.empty();
  }

  async function copyLicense(target) {
    console.log('target', target);

    const [err, result] = await to(copy(target.value));
    console.log('result', result);
    console.log('err', err);

    console.log('target.value', target.value);
    setCopyingLicenseMessage('Copied!');
    target.select();

    setTimeout(function () {
      setIsCopyingLicense(false);
    }, 2000);
  }

  function onLicenseClick(e) {
    copyLicense(e.target);
  }

  return (
    <section css={LicenseCSS}>
      <div css={RowCSS}>
        <h2 css={LicenseNameCSS}>
          {license.name === 'WP Shopify' ? 'WP Shopify Pro' : license.name}
        </h2>

        <input
          css={LicenseKeyCSS}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onLicenseClick}
          type='text'
          value={key ? key : ''}
          readOnly
        />

        <div css={LicenseKeyMeta}>
          <IconCopy />
          <span css={LicenseKeyCopyCSS}>{copyingLicenseMessage}</span>
        </div>
      </div>

      <div css={SectionCSS}>
        <Label text='License Details:' hasBorder={false} />
        <LicenseDetails license={license} />
      </div>

      <div css={SectionCSS}>
        <Label text={'Activated Sites: ' + license.site_count + ' / ' + license.limit} />
        <LicenseSites sites={license.sites} />
      </div>
    </section>
  );
}

function LicenseDetails({ license }) {
  return (
    <Table>
      <TableBody>
        <tr>
          <Td>Purchased:</Td>
          <Td>{prettyDate(license.purchased)}</Td>
        </tr>
        <tr>
          <Td>Expires:</Td>
          <Td>
            {license.expiration === 'lifetime' ? 'Lifetime 🎉' : prettyDate(license.expiration)}
          </Td>
        </tr>
        <tr>
          <Td>License Term:</Td>
          <Td>1 Year</Td>
        </tr>
        <tr>
          <Td>Activation Limit:</Td>
          <Td>
            {license.site_count} / {license.limit}
          </Td>
        </tr>
        <tr>
          <Td>Status:</Td>
          <Td extraCSS={StatusCSS(license.status)}>
            {license.status === 'expired' ? (
              <LicenseStatusExpired license={license} />
            ) : (
              license.status
            )}
          </Td>
        </tr>
      </TableBody>
    </Table>
  );
}

function LicenseStatusExpired({ license }) {
  const LicenseStatusExpiredCSS = css`
    color: black;
    padding-left: 10px;
    font-weight: normal;
  `;

  return (
    <div>
      <span>Expired</span>
      <a
        href={
          'https://wpshop.io/checkout/?edd_license_key=' +
          license.key +
          '&download_id=' +
          license.download_id
        }
        target='_blank'
        rel='noreferrer'
        css={LicenseStatusExpiredCSS}>
        Renew?
      </a>
    </div>
  );
}

function formatSiteUrl(url) {
  var lastChar = url[url.length - 1];

  if (lastChar === '/') {
    return url.slice(0, -1);
  }

  return url;
}

function LicenseSite({ site }) {
  const LicenseSiteCSS = css`
    margin: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;

    > div:first-of-type:hover + div span {
      background: #ffe6cf;
    }
  `;

  const LicenseUrlCSS = css`
    span {
      display: inline-block;
      background: #fff3e8;
      padding: 5px 10px 6px 10px;
      border-radius: 5px;
      line-height: 1;
      font-size: 15px;
      color: black;
      text-decoration: none;
      transition: all 0.2s ease;
      border: 1px solid #eec9a7;
    }
  `;

  const LicenseUrlRemoveCSS = css`
    padding: 10px 0px;
    position: relative;
    top: -8px;
    flex: 1;
    max-width: 300px;

    &:hover {
      cursor: pointer;
    }

    svg {
      position: relative;
      top: 2px;
      margin-left: 14px;

      path {
        fill: black;
      }
    }
    span {
      margin-left: 4px;
      font-size: 15px;
    }

    a {
      margin-left: 5px;
      color: black;
      font-size: 15px;
    }
  `;

  const siteUrl = formatSiteUrl(site.url);

  function onDeactiveSite(e) {
    console.log('on onDeactiveSite', e);
  }

  return (
    <li css={LicenseSiteCSS}>
      <div css={LicenseUrlRemoveCSS} onClick={onDeactiveSite}>
        <IconRemove />
        <a href='#!'>Deactivate Site</a>
      </div>
      <div css={LicenseUrlCSS}>
        <span>{siteUrl}</span>
      </div>
    </li>
  );
}

function LicenseSites({ sites }) {
  const LicenseSitesCSS = css`
    list-style: none;
    padding: 0;
  `;

  return sites.length ? (
    <ul css={LicenseSitesCSS}>
      {sites.map((site) => (
        <LicenseSite key={site.url} site={site} />
      ))}
    </ul>
  ) : (
    <Notice type='info'>No sites activated yet</Notice>
  );
}

export default AccountLicenses;
