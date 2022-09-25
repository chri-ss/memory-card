import githubMark from "../images/GitHub-Mark-64px.png";

const ScoreBoard = ({ score, prevScore }) => {
  return (
    <div className="pl-[64px] lg:pl-[96px] lg:pr-[32px] flex w-full flex-1 justify-center items-center bg-slate-300 lg:text-3xl text-md border border-black">
      <div className=""></div>
      <div className="flex items-center flex-col justify-center items-center flex-1">
        <h2>Current Score: {score}</h2>
        <h3>Previous Best Score: {prevScore}</h3>
      </div>
      <a
        href="https://github.com/chri-ss"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center max-h-[32px] lg:max-h-full"
      >
        <img className="object-contain" src={githubMark}></img>
      </a>
    </div>
  );
};

export default ScoreBoard;
