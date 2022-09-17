const ScoreBoard = ({ score }) => {
  return (
    <div className="flex w-full  justify-center items-center">
      <h2>Current Score: {score}</h2>
    </div>
  );
};

export default ScoreBoard;
