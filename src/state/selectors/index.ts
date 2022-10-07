import { RootStore } from "../store";

export const cardsSelector = (store: RootStore) => store.cards.card;
