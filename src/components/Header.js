const Header = ({ toggleAbout, toggleRules }) => {
  const About = () => {
    return (
      <li>
        <button className="hover:text-indigo-700" onClick={toggleAbout}>About</button>
      </li>
    );
  };
  const Rules = () => {
    return (
      <li >
        <button className="hover:text-indigo-700" onClick={toggleRules}>How to Play</button>
      </li>
    );
  };
  const Nav = () => {
    return (
      <ul className="flex justify-around items-center flex-auto text-xs lg:text-lg" >
        <About />
        <Rules />
      </ul>
    );
  };
  return (
    <div className="flex justify-around items-center border border-black h-20 bg-slate-300">
      <h1 className="flex text-lg lg:text-3xl font-bold underline flex-auto justify-center text-center">
        Hanafuda Memory
      </h1>
      <Nav />
    </div>
  );
};

export default Header;
