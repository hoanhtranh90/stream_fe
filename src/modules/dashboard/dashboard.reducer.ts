import { Dispatch } from "redux";

export const ACTION_TYPES = {
  SET_TYPE: 'auth/SET_TYPE'
};

const initialState = {
  menuType:1
};

export type DashBoardState = Readonly<typeof initialState>;

const DashBoardReducer = (
  state: DashBoardState = initialState,
  action: any
): DashBoardState => {
  switch (action.type) {
    case ACTION_TYPES.SET_TYPE:
      return {
        ...state,
        menuType: action.payload.menuType,
      };
    default:
      return state;
  }
};


export const changeMenu = (type) => async (dispatch: Dispatch, getState) => {
    console.log(type)
    dispatch({ type: ACTION_TYPES.SET_TYPE, payload: { menuType: type } })
  }
export default DashBoardReducer;
