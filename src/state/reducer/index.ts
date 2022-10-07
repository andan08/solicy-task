import { combineReducers } from "redux";
import { cardsReducer as cards } from "./cardReducer";

export const reducer = combineReducers({
  cards,
});
