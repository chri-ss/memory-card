import cards from "../images/cardLoader";

const Modal = ({ about, rules, toggleAbout, toggleRules }) => {
  //cards for rules modal
  const plants = cards.filter((card) => card.type === "kasu");
  const ribbons = cards.filter((card) => card.type === "tanzaku");
  const animals = cards.filter((card) => card.type === "tane");
  const specials = cards.filter((card) => card.type === "hikari");

  const aprils = cards.filter((card) => card.month === "april");

  return about === true || rules === true ? (
    <div className=" flex w-screen h-screen absolute justify-center items-center text-2xl text-center flex-col">
      <div className=" w-full h-full opacity-50 bg-gray-300"></div>

      {about === true ? (
        <div className="sm:w-4/6 lg:w-2/6 h-4/6 p-6 z-100 bg-white absolute overflow-auto border border-black rounded-md">
          <div
            className="flex cursor-pointer text-5xl justify-end hover:text-indigo-600"
            onClick={about === true ? toggleAbout : toggleRules}
          >
            ✖
          </div>
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
          <br></br>
          <a
            href="https://en.wikipedia.org/wiki/Hanafuda"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-900 hover:text-cyan-300 bg-zinc-400 hover:bg-zinc-700 p-1 border border-zinc-800 rounded-sm"
          >
            Hanafuda
          </a>
        </div>
      ) : (
        <div className=" flex sm:w-4/6 lg:w-2/6 h-4/6 p-6 z-100 bg-white absolute overflow-auto border border-black rounded-md flex-col items-center">
          <div
            className="flex w-full cursor-pointer text-5xl justify-end hover:text-indigo-600"
            onClick={about === true ? toggleAbout : toggleRules}
          >
            ✖
          </div>
          <h2 className="flex text-4xl justify-center underline">Objective</h2>
          <br></br>
          <p>
            Click cards to score points. Don't click the same card twice!
            Different card types award different scores and combos can boost
            your score. See below for more.
          </p>
          <br></br>
          <h3 className="flex text-4xl justify-center underline">Scoring</h3>
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
          <br></br>
          <p>Ribbon (tanzaku) cards - 5 points</p>
          <br></br>
          <ul className="grid h-min w-4/6 grid-cols-5 grid-rows-2 gap-2">
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
          <br></br>
          <br></br>
          <p>Animal* (tane) cards - 10 points</p>
          <br></br>
          <p className="text-xs w-8/12">
            *note: also included are the '8-plank bridge' and 'sake cup' cards,
            despite not being animals{" "}
          </p>
          <br></br>
          <ul className="grid h-min w-4/6 grid-cols-5 grid-rows-2 gap-2">
            {animals.map((animal) => (
              <li className="" key={animal.id}>
                <img
                  className="h-auto w-auto"
                  alt="hanafuda-card"
                  src={animal.image}
                ></img>
              </li>
            ))}
          </ul>
          <br></br>
          <br></br>
          <p>Special (hikari, 'bright') cards - 20 points</p>
          <br></br>
          <ul className="grid h-min w-4/6 grid-cols-5 gap-2">
            {specials.map((special) => (
              <li className="" key={special.id}>
                <img
                  className="h-auto w-auto"
                  alt="hanafuda-card"
                  src={special.image}
                ></img>
              </li>
            ))}
          </ul>
          <br></br>
          <br></br>
          <div className="flex w-5/6 flex-col items-center">
            <h4 className="flex text-4xl justify-center underline">Combos</h4>
            <br></br>
            <p>
              <strong>10 plants</strong> - 1 extra point + 1 additional point
              for each extra plant
            </p>
            <br></br>
            <p>
              <strong>5 ribbons</strong> - 1 extra point + 1 additional point
              for each extra ribbon
            </p>
            <br></br>
            <p>
              <strong>5 animals</strong> - 1 extra point + 1 additional point
              for each extra animal
            </p>
            <br></br>
            <p>
              <strong>3 specials (without the rainman)</strong> - 6 extra points
            </p>
            <br></br>
            <p>
              <strong>4 specials (with the rainman)</strong> - 7 extra points
            </p>
            <br></br>
            <p>
              <strong>4 specials (without the rainman)</strong> - 8 extra points
            </p>
            <br></br>
            <p>
              <strong>All 5 specials</strong> - 8 extra points
            </p>
            <br></br>
            <p>
              <strong>4 of a kind</strong> - 4 extra points, all 4 must
              represent matching plant type. example:
              <br></br>
              <br></br>
            </p>
            <ul className="grid h-min w-4/6 grid-cols-4 gap-2">
              {aprils.map((april) => (
                <li className="" key={april.id}>
                  <img
                    className="h-auto w-auto"
                    alt="hanafuda-card"
                    src={april.image}
                  ></img>
                </li>
              ))}
            </ul>
            <br></br>
          </div>
        </div>
      )}
    </div>
  ) : null;
};

export default Modal;
