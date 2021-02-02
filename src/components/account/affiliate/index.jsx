import AccountBodyHeader from '../body/header';
import AccountBodyContent from '../body/content';
import Notice from '../../_common/notice';
import React from 'react';
import { css } from '@emotion/react/macro';

function AccountAffiliate() {
  const NoticeWrapperCSS = css`
    svg {
      top: 0;
    }

    span,
    a {
      margin-right: 4px;
    }
  `;

  return (
    <>
      <AccountBodyHeader heading='Affiliate' />
      <AccountBodyContent>
        <div css={NoticeWrapperCSS}>
          <Notice type='info'>
            <span>Coming soon! In the meantime, please send an email to</span>
            <a href='mailto:hello@wpshop.io' target='_blank' rel='noreferrer'>
              hello@wpshop.io
            </a>{' '}
            <span>with any questions you may have about your affiliate account.</span>
          </Notice>
        </div>
      </AccountBodyContent>
    </>
  );
}

export default AccountAffiliate;
