import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import cards from "./images/cardLoader";
function App() {
  const [allCards, setAllCards] = useState(cards);

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

  const shuffleCards = () => {
    const tempCards = [...allCards];
    shuffle(tempCards);
    setAllCards(tempCards);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="flex flex-col App h-screen">
      <Header />
      <CardContainer allCards={allCards} shuffleCards={shuffleCards} />
    </div>
  );
}

export default App;
