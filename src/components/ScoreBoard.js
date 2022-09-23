const ScoreBoard = ({ score, prevScore }) => {
  return (
    <div className="flex w-full flex-1 justify-center items-center flex-col bg-slate-300 text-3xl border border-black">
      <h2>Current Score: {score}</h2>
      <h3>Previous Best Score: {prevScore}</h3>
    </div>
  );
};

export default ScoreBoard;
