const ScoreBoard = ({ score, prevScore }) => {
  return (
    <div className="flex w-full  justify-center items-center flex-col">
      <h2>Current Score: {score}</h2>
      <h3>Previous Best Score: {prevScore}</h3>
    </div>
  );
};

export default ScoreBoard;
