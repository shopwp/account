async function deactivateLicense(data) {
  const token = JSON.parse(localStorage.getItem('wpshopify-account-auth-token'));
  const apiURL = 'https://wpshopify-web.loc';

  const response = await fetch(apiURL + '/wp-json/customers/v1/deactivate_license', {
    body: JSON.stringify({
      key: data.key,
      item_name: data.itemName,
      item_id: data.itemId,
      siteURL: data.url,
      apiURL: apiURL,
    }),
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.token,
    },
  });

  return await response.json();
}

async function updateProfile(data) {
  const token = JSON.parse(localStorage.getItem('wpshopify-account-auth-token'));

  const response = await fetch('https://wpshopify-web.loc/wp-json/customers/v1/update/profile', {
    body: JSON.stringify(data),
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.token,
    },
  });

  return await response.json();
}

export { updateProfile, deactivateLicense };
