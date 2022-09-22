const AboutModal = () => {
  return (
    <div className=" flex w-screen h-screen bg-gray-300 absolute justify-center items-center text-2xl flex-col">
      <div className="w-1/2 h-3/6 bg-white overflow-y-scroll">
        <p className="pl-6 pr-6 h-auto ">
          Hanafuda (花札) are a style of Japanese playing cards. They are
          smaller than typical western playing cards and feature art of plants,
          poetry ribbons known as tanzaku (短冊), animals, birds or man-made
          objects. <br></br>
          <br></br>
          Hanafuda are used to play a variety of games, popular among them are
          Koi-Koi and Hachi-Hachi. Hanafuda also popular in Korea and other
          parts of the world as well. This application is a memory game that
          makes use of Hanafuda's unique patterns, with scoring is based on the
          game Koi-Koi.<br></br>
          <br></br>
        </p>
      </div>
      <div>
        <button>close</button>
      </div>
    </div>
  );
};

export default AboutModal;
