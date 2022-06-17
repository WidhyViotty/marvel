import { Link } from "react-router-dom";

const Header = () => {
  //   const navigate = useNavigate();
  // const handleSearchTerm = (e) => {
  //   console.log(e.target.value);
  //   // let value = e.target.value;
  //   // setSearchTerm(value);
  // };
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/langfr-560px-Marvel_Logo.svg.png"
            alt="logo"
            style={{ height: "50px", width: "150px" }}
          />
        </div>
      </Link>
      {/* <input
        type="text"
        className="searchbar"
        placeholder="Find your Heroes"
        onChange={handleSearchTerm}
        style={{
          borderColor: "#ED171E",
          borderRadius: 5,
        }}
      ></input> */}
      <div className="buttons">
        <Link to="/comics">
          <button className="button">Comics</button>
        </Link>
        <Link to="/characters">
          <button className="button">Heroes/Villains</button>
        </Link>
        <Link to="/signup">
          <button className="button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="button">Log In</button>
        </Link>
        <button className="button">Log Out</button>
      </div>
    </header>
  );
};

export default Header;
