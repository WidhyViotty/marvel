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
            src="https://images.vectorhq.com/images/previews/cd8/marvel-logo-psd-444569.png"
            alt="test"
            style={{ height: "40px", width: "120px" }}
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
      <div class="menuHome">
        <ul>
          <li>
            <a href="/characters">Heroes / Villains</a>
          </li>
          <li>
            <a href="/comics">Comics</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
