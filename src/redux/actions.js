import { SET_PLAYERS_LIST } from "./types";

export const setPlayersList = (playersListData) => {
  return {
    type: SET_PLAYERS_LIST,
    payload: playersListData,
  };
};
