import { ActionsType } from "../../actions";
import { ADD_CARD, DELETE_CARD, SORT_CARD } from "../../types";

const initialData = {
  card: [] as { id: number }[],
};

export const cardsReducer = (state = initialData, action: ActionsType) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        card: [...state.card, { id: Math.floor(Math.random() * 500) }],
      };
    case DELETE_CARD:
      return {
        card: state.card.filter((item) => item.id !== action.payload.id),
      };
    case SORT_CARD:
      const sortedArray = state.card.sort((a, b) => a.id - b.id);
      return {
        ...state,
        card: [...sortedArray],
      };
    default:
      return state;
  }
};
