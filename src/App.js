import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import ScoreBoard from "./components/ScoreBoard";
import cards from "./images/cardLoader";

function App() {
  const [allCards, setAllCards] = useState(cards);
  const [score, setScore] = useState(0);
  const [prevScore, setPrevScore] = useState(0);

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
    const currentCard = allCards.find((card) => card.id === e.target.id);
    if (currentCard.seen === true) {
      setPrevScore(score > prevScore ? score : prevScore);
      setScore(0);
      setAllCards(
        allCards.map((card) => {
          return { ...card, seen: false };
        })
      );
    } else {
      switch (currentCard.type) {
        case "tanzaku": {
          setScore(score + 5);
          break;
        }
        case "tane": {
          setScore(score + 10);
          break;
        }
        case "hikari": {
          setScore(score + 20);
          break;
        }
        default: {
          setScore(score + 1); //kasu
          break;
        }
      }
    }
  };

  const shuffleCards = () => {
    const tempCards = [...allCards];
    shuffle(tempCards);
    setAllCards(tempCards);
  };

  useEffect(() => {
    shuffleCards();
    console.log(score);
  }, [score]);

  return (
    <div className="flex flex-col App h-screen border-box">
      <Header />
      <CardContainer allCards={allCards} markSeen={markSeen} />
      <ScoreBoard score={score} prevScore={prevScore} />
    </div>
  );
}

export default App;
