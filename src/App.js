import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import cards from "./images/cardLoader";
function App() {
  const [allCards, setAllCards] = useState(cards);
  const [round, setRound] = useState(0);

  //mutable, make sure to copy arr in state and reassign afterwards.
  const shuffle = (arr) => {
    let curr = arr.length - 1;
    while (curr !== 0) {
      let swap = Math.floor(Math.random() * curr);
      curr--;

      let temp = arr[curr];
      arr[curr] = arr[swap];
      arr[swap] = temp;
    }
    return arr;
  };

  const markSeen = (e) => {
    setAllCards(
      allCards.map((card) => {
        if (card.id === e.target.id) {
          return { ...card, seen: true };
        } else {
          return card;
        }
      })
    );
    // shuffleCards();
    setRound(round + 1);
    console.log(allCards);
  };

  const shuffleCards = () => {
    const tempCards = [...allCards];
    shuffle(tempCards);
    setAllCards(tempCards);
  };

  useEffect(() => {
    shuffleCards();
  }, [round]);

  return (
    <div className="flex flex-col App h-screen">
      <Header />
      <CardContainer
        allCards={allCards}
        // shuffleCards={shuffleCards}
        markSeen={markSeen}
      />
    </div>
  );
}

export default App;
