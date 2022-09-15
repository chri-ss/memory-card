import { useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import cards from "./images/cardLoader";
function App() {
  const [allCards, setAllCards] = useState(cards);

  return (
    <div className="flex flex-col App h-screen">
      <Header />
      <CardContainer allCards={allCards} />
    </div>
  );
}

export default App;
