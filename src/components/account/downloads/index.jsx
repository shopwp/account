import { css } from '@emotion/react/macro';
import { useContext } from 'react';
import { AccountContext } from '../_state/context';
import AccountBodyHeader from '../body/header';
import AccountBodyContent from '../body/content';
import Table from '../../_common/tables';
import TableBody from '../../_common/tables/body';
import TableHeader from '../../_common/tables/header';
import Th from '../../_common/tables/header/th';
import Td from '../../_common/tables/body/td';
import ButtonLink from '../../_common/button-link';
import { IconDownload } from '../../_common/icons';

function Download({ download }) {
  return (
    download && (
      <tr>
        <Td>{download.name === 'WP Shopify' ? 'WP Shopify Pro' : download.name}</Td>
        <Td>{download.latest_version}</Td>
        <Td>
          <ButtonLink
            download={true}
            text='Download latest version'
            href={download.files.file}
            icon={<IconDownload />}
          />
        </Td>
      </tr>
    )
  );
}

function Downloads({ downloads }) {
  const DownloadsTableCSS = css`
    width: 100%;
    max-width: 100%;
  `;

  const narrowCol = css`
    width: 130px;
  `;

  return (
    <Table extraCSS={DownloadsTableCSS}>
      <TableHeader>
        <Th extraCSS={narrowCol}>Name</Th>
        <Th extraCSS={narrowCol}>Latest Version</Th>
        <Th>Files</Th>
      </TableHeader>
      <TableBody>
        {Object.keys(downloads).map((download, index) => (
          <Download download={downloads[download]} key={download} />
        ))}
      </TableBody>
    </Table>
  );
}

function AccountDownloads() {
  const [accountState] = useContext(AccountContext);

  return (
    <div>
      <AccountBodyHeader heading='Downloads' />
      {accountState.customer && (
        <AccountBodyContent>
          <Downloads downloads={accountState.customer.downloads} />
        </AccountBodyContent>
      )}
    </div>
  );
}

export default AccountDownloads;
