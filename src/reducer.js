const defaultState = {
  currentPage: 'NewPost',
};

const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE': {
      return { ...state, currentPage: action.page };
    }
    default:
      return state
  }
};

export default reducer;
