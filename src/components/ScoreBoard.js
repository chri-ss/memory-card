import githubMark from "../images/GitHub-Mark-64px.png";

const ScoreBoard = ({ score, prevScore }) => {
  return (
    <div className="flex w-full flex-1 justify-center items-center bg-slate-300 lg:text-3xl sm:text-lg border border-black">
      <div className="w-24"></div>
      <div className="flex items-center flex-col justify-center items-center flex-1">
        <h2>Current Score: {score}</h2>
        <h3>Previous Best Score: {prevScore}</h3>
      </div>
      <a
        href="https://github.com/chri-ss"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center w-24"
      >
        <img className="sm:w-16 lg:w-full" src={githubMark}></img>
      </a>
    </div>
  );
};

export default ScoreBoard;
