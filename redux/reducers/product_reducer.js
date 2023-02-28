import { OPEN_SIDEBAR } from "./../actionTypes";

const initialState = {
  openSidebar: false,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        openSidebar: true,
      };

    default:
      return state;
  }
};

export default productReducer;
