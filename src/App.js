import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import ScoreBoard from "./components/ScoreBoard";
import Modal from "./components/Modal";
import cards from "./images/cardLoader";
import yakus from "./yakus";

function App() {
  const [allCards, setAllCards] = useState(cards);
  const [score, setScore] = useState(0);
  const [prevScore, setPrevScore] = useState(0);
  const [allYakus, setYakus] = useState(yakus);
  const [turn, setTurn] = useState(0);
  const [round, setRound] = useState(1);

  const [about, setAbout] = useState(false);
  const [rules, setRules] = useState(false);

  //mutable, make sure to copy arr in state and reassign afterwards.
  const shuffle = (arr) => {
    let curr = arr.length;
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
    updateYakus(currentCard);
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

    setTurn(turn + 1);
  };

  const updateYakus = (card) => {
    const month = card.month;
    setYakus(
      allYakus.map((yaku) => {
        if (yaku.hasOwnProperty(month)) {
          return { ...yaku, [`${month}`]: yaku[`${month}`] + 1 };
        }
        if (card.type === "kasu" && yaku.hasOwnProperty("plants")) {
          return { ...yaku, plants: allYakus[1].plants + 1 };
        } else if (card.type === "tanzaku" && yaku.hasOwnProperty("ribbons")) {
          return { ...yaku, ribbons: allYakus[1].ribbons + 1 };
        } else if (card.type === "tane" && yaku.hasOwnProperty("animals")) {
          return { ...yaku, animals: allYakus[1].animals + 1 };
        } else if (card.type === "hikari") {
          if (card.subtype === "rainman") {
            return {
              ...yaku,
              rainman: true,
              specials: allYakus[1].specials + 1,
            };
          } else {
            return { ...yaku, specials: allYakus[1].specials + 1 };
          }
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

  const checkPlants = () => {
    if (allYakus[1].plants >= 10) {
      setScore(score + 1);
    }
  };

  const checkRibbons = () => {
    if (allYakus[1].ribbons >= 5) {
      setScore(score + 1);
    }
  };

  const checkAnimals = () => {
    if (allYakus[1].animals >= 5) {
      setScore(score + 1);
    }
  };

  const checkSpecials = () => {
    if (allYakus[1].specials === 3 && allYakus[1].rainman === false) {
      setScore(score + 6);
    } else if (allYakus[1].specials === 4 && allYakus[1].rainman === false) {
      setScore(score + 8);
    } else if (allYakus[1].specials === 4 && allYakus[1].rainman === true) {
      setScore(score + 7);
    } else if (allYakus[1].specials === 5) {
      setScore(score + 15);
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

    /*following flag and loop are to guard against being served a board of 
    all cards that have been previously seen*/
    let allSeen = true;
    for (let i = 0; i < 16; i++) {
      if (tempCards[i].seen === false) {
        allSeen = false;
      }
    }

    if (allSeen === true) {
      shuffleCards();
    } else {
      setAllCards(tempCards);
    }
  };

  const toggleAbout = () => {
    if (about === false) {
      setAbout(true);
    } else {
      setAbout(false);
    }
  };

  const toggleRules = () => {
    if (rules === false) {
      setRules(true);
    } else {
      setRules(false);
    }
  };

  useEffect(() => {
    // shuffleCards();
    checkMonths();
    console.log(allCards);
  }, [score]);

  useEffect(() => {
    shuffleCards();
  }, [turn]);

  useEffect(() => {
    checkPlants();
  }, [allYakus[1].plants]);

  useEffect(() => {
    checkRibbons();
  }, [allYakus[1].ribbons]);

  useEffect(() => {
    checkAnimals();
  }, [allYakus[1].animals]);

  useEffect(() => {
    checkSpecials();
  }, [allYakus[1].specials]);

  useEffect(() => {
    clearYakus();
    setScore(0);
    shuffleCards();
  }, [round]);

  return (
    <div className="flex flex-col App h-screen border-box">
      <Header toggleAbout={toggleAbout} toggleRules={toggleRules} />
      <CardContainer allCards={allCards} markSeen={markSeen} />
      <ScoreBoard score={score} prevScore={prevScore} />
      <Modal
        about={about}
        rules={rules}
        toggleAbout={toggleAbout}
        toggleRules={toggleRules}
      />
    </div>
  );
}

export default App;
