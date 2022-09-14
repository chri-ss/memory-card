const Nav = () => {
  return (
    <ul className="flex justify-around items-center flex-auto">
      <Rules />
      <About />
    </ul>
  );
};

const Rules = () => {
  return (
    <li>
      <a href="">Rules</a>
    </li>
  );
};

const About = () => {
  return <li><a href="">About</a></li>;
};

const Header = () => {
  return (
    <div className="flex justify-around items-center">
      <h1 className="flex text-3xl font-bold underline flex-auto justify-center">Hanafuda Memory</h1>
      <Nav />
    </div>
  );
};

export default Header;
