async function updateProfile(data) {
  const response = await fetch('https://wpshopify-web.loc/wp-json/customers/v1/update/profile', {
    body: JSON.stringify(data),
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
}

export { updateProfile };
