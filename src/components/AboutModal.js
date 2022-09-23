const AboutModal = ({ about, toggleAbout }) => {
  return about === true ? (
    <div className=" flex w-screen h-screen absolute justify-center items-center text-2xl flex-col">
      <div className=" w-full h-full opacity-50 bg-gray-300"></div>
      <div
        className="absolute top-28 right-1/4 text-5xl cursor-pointer"
        onClick={toggleAbout}
      >
        ✖
      </div>
      <div className="w-2/6 h-4/6 p-6 z-100 bg-white absolute overflow-auto border border-black indent-16 rounded-md">
        <br></br>
        <p className=" h-auto ">
          Hanafuda (花札) are a style of Japanese playing cards. They are
          smaller than typical western playing cards and feature art of plants,
          poetry ribbons known as tanzaku (短冊), animals, birds or man-made
          objects.{" "}
        </p>{" "}
        <br></br>
        <p>
          Hanafuda are used to play a variety of games, popular among them are
          Koi-Koi and Hachi-Hachi. Hanafuda is also popular in Korea and other
          parts of the world. This application is a memory game that makes use
          of Hanafuda's unique patterns, with scoring based on the game Koi-Koi.
        </p>
        <br></br>
        <br></br>
      </div>
    </div>
  ) : null;
};

export default AboutModal;
