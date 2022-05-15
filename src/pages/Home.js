import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        margin: 150,
        marginTop: 50,
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link to="/Characters">
          <img
            src="https://wegotthiscovered.com/wp-content/uploads/2022/02/Marvel-Characters.jpg"
            alt=""
            style={{ width: 500, height: 600 }}
          />
        </Link>
      </div>
      <div>
        <Link to="/Comics">
          <img
            src="https://www.cmcreation.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/7/474760.jpg"
            alt=""
            style={{ width: 500, height: 600 }}
          />
        </Link>
      </div>
    </main>
  );
};

export default Home;
