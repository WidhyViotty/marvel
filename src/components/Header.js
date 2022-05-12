import { Link } from "react-router-dom";

const Header = () => {
  //   const navigate = useNavigate();
  return (
    <header>
      <Link to="/characters">
        <div className="logo">
          <img
            src="https://www.presse-citron.net/app/uploads/2019/11/14-nouveaux-films-marvel-dates.jpg"
            alt="logo"
            style={{ height: "50px", width: "150px" }}
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;
