import cards from "../images/cardLoader";

const Modal = ({ about, rules, toggleAbout, toggleRules }) => {
  //cards for rules modal
  const plants = cards.filter((card) => card.type === "kasu");
  const ribbons = cards.filter((card) => card.type === "tanzaku");

  return about === true || rules === true ? (
    <div className=" flex w-screen h-screen absolute justify-center items-center text-lg text-center flex-col">
      <div className=" w-full h-full opacity-50 bg-gray-300"></div>
      <div
        className="absolute top-28 right-1/4 cursor-pointer text-5xl"
        onClick={about === true ? toggleAbout : toggleRules}
      >
        ✖
      </div>
      {about === true ? (
        <div className="w-2/6 h-4/6 p-6 z-100 bg-white absolute overflow-auto border border-black rounded-md">
          <br></br>
          <p>
            Hanafuda (花札) are a style of Japanese playing cards. They are
            smaller than typical western playing cards and feature art of
            plants, poetry ribbons known as tanzaku (短冊), animals, birds or
            man-made objects.{" "}
          </p>{" "}
          <br></br>
          <p>
            Hanafuda are used to play a variety of games, popular among them are
            Koi-Koi and Hachi-Hachi. Hanafuda is also popular in Korea and other
            parts of the world. This application is a memory game that makes use
            of Hanafuda's unique patterns, with scoring based on the game
            Koi-Koi.
          </p>
          <br></br>
          <p>
            There are 48 cards total, and 16 are displayed at any time. the game
            ensures there is always at least one card that you haven't seen yet,
            but the difficulty increases quickly as you click.
          </p>
        </div>
      ) : (
        <div className=" flex w-6/12 h-4/6 p-6 z-100 bg-white absolute overflow-auto border border-black rounded-md flex-col items-center">
          <h2 className="flex text-4xl justify-center indent-0 underline">
            Objective
          </h2>
          <br></br>
          <p>
            Click cards to score points. Don't click the same card twice!
            Different card types award different scores and combos can boost
            your score. See below for more.
          </p>
          <br></br>
          <h3 className="flex text-4xl justify-center indent-0 underline">
            Scoring
          </h3>
          <br></br>
          <p>Plant (kasu) cards - 1 point</p>
          <br></br>
          <ul className="grid h-min w-5/6 grid-cols-6 grid-rows-4 gap-2">
            {plants.map((plant) => (
              <li className="" key={plant.id}>
                <img
                  className="h-auto w-auto"
                  alt="hanafuda-card"
                  src={plant.image}
                ></img>
              </li>
            ))}
          </ul>
          <br></br>
          <p>Ribbon (tazaku) cards - 5 points</p>
          <br></br>
          <ul className="grid h-min w-5/6 grid-cols-6 grid-rows-4 gap-2">
            {ribbons.map((ribbon) => (
              <li className="" key={ribbon.id}>
                <img
                  className="h-auto w-auto"
                  alt="hanafuda-card"
                  src={ribbon.image}
                ></img>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ) : null;
};

export default Modal;
