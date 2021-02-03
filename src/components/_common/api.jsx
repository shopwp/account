function getApiDomain() {
  if (window.location.host.includes('localhost')) {
    return 'https://wpshopify-web.loc';
  } else {
    return 'https://wpshop.io';
  }
}

async function deactivateLicense(data) {
  const token = JSON.parse(localStorage.getItem('wpshopify-account-auth-token'));
  const apiURL = getApiDomain();

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
  const apiURL = getApiDomain();

  const response = await fetch(apiURL + '/wp-json/customers/v1/update/profile', {
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

async function cancelSubscription(data) {
  const token = JSON.parse(localStorage.getItem('wpshopify-account-auth-token'));
  const apiURL = getApiDomain();

  data.userId = token.userId;

  const response = await fetch(apiURL + '/wp-json/customers/v1/subscription/cancel', {
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

async function reactivateSubscription(data) {
  const token = JSON.parse(localStorage.getItem('wpshopify-account-auth-token'));
  const apiURL = getApiDomain();

  data.userId = token.userId;

  const response = await fetch(apiURL + '/wp-json/customers/v1/subscription/reactivate', {
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

async function updatePaymentMethod(data) {
  const token = JSON.parse(localStorage.getItem('wpshopify-account-auth-token'));
  const apiURL = getApiDomain();

  const response = await fetch(apiURL + '/wp-json/customers/v1/update/payment', {
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

async function loginUserToWordPress(data) {
  const token = JSON.parse(localStorage.getItem('wpshopify-account-auth-token'));
  const apiURL = getApiDomain();

  const response = await fetch(apiURL + '/wp-json/customers/v1/login', {
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

export {
  updateProfile,
  updatePaymentMethod,
  deactivateLicense,
  cancelSubscription,
  reactivateSubscription,
  loginUserToWordPress,
  getApiDomain,
};
