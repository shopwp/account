function AccountInitialState() {
  return {
    customer: false,
    isModalOpen: false,
    activeModalView: false,
    activePage: 'home',
    isAuthed: localStorage.getItem('wpshopify-account-auth-token') ? true : false,
    pages: [
      {
        title: 'home',
        link: '/',
      },
      {
        title: 'licenses',
        link: '/licenses',
      },
      {
        title: 'subscriptions',
        link: '/subscriptions',
      },
      {
        title: 'purchases',
        link: '/purchases',
      },
      {
        title: 'downloads',
        link: '/downloads',
      },
      {
        title: 'affiliate',
        link: '/affiliate',
      },
    ],
    notice: false,
  };
}

export { AccountInitialState };
