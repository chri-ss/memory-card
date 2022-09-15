import uniqid from "uniqid";

const CardContainer = ({ allCards }) => {
  const cardsToShow = allCards.filter((card, i) => i > 16);
  return (
    <div className="flex w-full h-full justify-center items-center">
      <ul className="grid h-5/6 w-5/6 border border-black grid-cols-4 grid-rows-4 gap-2 justify-items-center">
        {cardsToShow.map((card) => (
          <li key={uniqid()}>
            <img className="h-full" src={card.image}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardContainer;
