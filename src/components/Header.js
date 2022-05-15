import { Link } from "react-router-dom";

const Header = () => {
  //   const navigate = useNavigate();
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img
            src="https://www.presse-citron.net/app/uploads/2019/11/14-nouveaux-films-marvel-dates.jpg"
            alt="logo"
            style={{ height: "50px", width: "150px" }}
          />
        </div>
      </Link>
      <input
        className="searchbar"
        placeholder="Rechercher personnages ou comics"
      ></input>
      <div className="button">
        <Link to="/comics">
          <button className="book">Comics</button>
        </Link>
        <Link to="/characters">
          <button className="perso">Personnages</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
