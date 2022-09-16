const CardContainer = ({ allCards, markSeen }) => {
  const cardsToShow = allCards.filter((card, i) => i > 16);
  return (
    <div className="flex w-full h-full justify-center items-center">
      <ul className="grid h-5/6 w-5/6 border border-black grid-cols-4 grid-rows-4 gap-2 justify-items-center">
        {cardsToShow.map((card) => (
          <li key={card.id}>
            <img
              className="h-full"
              alt="hanafuda-card"
              src={card.image}
              id={card.id}
              onClick={markSeen}
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardContainer;
