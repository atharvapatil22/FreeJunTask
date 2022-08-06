import { SET_PLAYERS_LIST } from "./types";

const initialState = {
  playersList: [],
  stadiumsList: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYERS_LIST:
      return {
        ...state,
        playersList: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
