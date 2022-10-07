import { useCallback } from "react";
import "./Page.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCard, sortCard } from "../../state/actions/index";
import { CardList } from "../card-list";
import { cardsSelector } from "../../state";

const Page = () => {
  const dispatch = useDispatch();
  const cards = useSelector(cardsSelector);

  const handleAddCard = useCallback(() => dispatch(addCard()), [dispatch]);

  const handleSortCard = useCallback(() => dispatch(sortCard()), [dispatch]);

  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <button onClick={handleAddCard}>Add Card</button>
          <button onClick={handleSortCard}>Sort Cards</button>
        </div>
        <div className="main">
          <CardList cards={cards} />
        </div>
        <div className="footer">Footer</div>
      </div>
      <div className="aside">Instructions</div>
    </div>
  );
};

export default Page;
