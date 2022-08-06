import { SET_PLAYERS_LIST } from "./types";

export const authUserSet = (playersListData) => {
  return {
    type: SET_PLAYERS_LIST,
    payload: playersListData,
  };
};
