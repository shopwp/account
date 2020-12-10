import update from 'immutability-helper';

function AccountReducer(state, action) {
  switch (action.type) {
    case 'SET_CUSTOMER':
      return {
        ...state,
        customer: update(state.customer, { $set: action.payload }),
      };

    case 'SET_ACTIVE_PAGE':
      console.log('state.activePage', state.activePage);

      return {
        ...state,
        activePage: update(state.activePage, { $set: action.payload }),
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type} in AccountReducer`);
    }
  }
}

export { AccountReducer };
