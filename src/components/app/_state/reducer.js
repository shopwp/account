import update from 'immutability-helper';

function AppReducer(state, action) {
  switch (action.type) {
    case 'SET_CUSTOMER':
      return {
        ...state,
        customer: update(state.customer, { $set: action.payload }),
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type} in AppReducer`);
    }
  }
}

export { AppReducer };
