import { portfolioConstants } from '../constants/portfolio';
const initialState = {
  items: [],
  count: 0,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case portfolioConstants.SET_PORTFOLIO_LIST_SUCCESS:
      return {
        ...state,
        items: action.items,
        count: action.count,
      };
    default:
      return state;
  }
};
