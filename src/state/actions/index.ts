import { ADD_CARD, DELETE_CARD, SORT_CARD } from "../types";

export const addCard = () => ({
  type: ADD_CARD,
});

export const deleteCard = (id: number) => ({
  type: DELETE_CARD,
  payload: { id },
});

export const sortCard = () => ({
  type: SORT_CARD,
});

export type ActionsType =
  | ReturnType<typeof sortCard>
  | ReturnType<typeof deleteCard>
  | ReturnType<typeof addCard>;
