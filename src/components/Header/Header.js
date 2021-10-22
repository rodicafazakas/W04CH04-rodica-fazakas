import "./Header.css";

const Header = () => {
  return (
    <header className="main-header row align-items-center">
      <h1 className="main-title col-6">REACT FORM </h1>

      <nav className="main-navigation col-6 text-end">

        <ul className="list-inline">
          <li className="list-inline-item"> <a href="back"> Back </a> </li>
          <li className="list-inline-item"> <a href="next"> Next </a> </li>
        </ul>
      
      </nav>

    </header>
  );
};

export default Header;
