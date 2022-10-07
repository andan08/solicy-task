import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../state/actions";
import "./CardList.scss";

export interface CardListProps {
  cards: {
    id: number;
  }[];
}

const CardList: FC<CardListProps> = ({ cards }) => {
  const dispatch = useDispatch();

  return (
    <div className="card-list-container">
      {cards.length > 0 ? (
        cards.map((card, i) => {
          return (
            <div key={i} className="card">
              {card.id}
              <div
                onClick={() => dispatch(deleteCard(card.id))}
                className="remove-card"
              >
                x
              </div>
            </div>
          );
        })
      ) : (
        <>no data</>
      )}
    </div>
  );
};

export default CardList;
