const CardContainer = ({ allCards, markSeen }) => {
  const cardsToShow = allCards.filter((card, i) => i < 16);
  return (
    <div className="flex w-full h-5/6 justify-center items-center bg-zinc-200 border border-black">
      <ul className="grid h-5/6 w-4/6 lg:w-3/6 p-2 bg-slate-300 border border-black grid-cols-4 grid-rows-4 gap-2 justify-items-center align-content-center rounded-xl">
        {cardsToShow.map((card) => (
          <li className="h-full w-full" key={card.id}>
            <img
              className="h-full w-full hover:cursor-pointer"
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
