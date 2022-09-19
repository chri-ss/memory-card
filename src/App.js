import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import ScoreBoard from "./components/ScoreBoard";
import cards from "./images/cardLoader";
import yakus from "./yakus";

function App() {
  const [allCards, setAllCards] = useState(cards);
  const [score, setScore] = useState(0);
  const [prevScore, setPrevScore] = useState(0);
  const [allYakus, setYakus] = useState(yakus);
  const [round, setRound] = useState(1);

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
      setRound(round + 1);
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
    updateMonths(currentCard);
  };

  const updateMonths = (card) => {
    const month = card.month;
    setYakus(
      allYakus.map((yaku) => {
        if (yaku.hasOwnProperty(month)) {
          return { ...yaku, [`${month}`]: yaku[`${month}`] + 1 };
        } else {
          return yaku;
        }
      })
    );
  };

  const checkMonths = () => {
    const months = allYakus[0];
    for (let month in months) {
      if (months[month] === 4) {
        setScore(score + 4);
        setYakus(
          allYakus.map((yaku) => {
            if (yaku.hasOwnProperty(month)) {
              return { ...yaku, [`${month}`]: 0 };
            } else {
              return yaku;
            }
          })
        );
      }
    }
  };

  const clearYakus = () => {
    setYakus(
      allYakus.map((yaku, i) => {
        return yakus[i];
      })
    );
  };

  const shuffleCards = () => {
    const tempCards = [...allCards];
    shuffle(tempCards);
    setAllCards(tempCards);
  };

  useEffect(() => {
    shuffleCards();
    checkMonths();
    console.log(allYakus);
  }, [score]);

  useEffect(() => {
    clearYakus();
  }, [round]);

  return (
    <div className="flex flex-col App h-screen border-box">
      <Header />
      <CardContainer allCards={allCards} markSeen={markSeen} />
      <ScoreBoard score={score} prevScore={prevScore} />
    </div>
  );
}

export default App;
