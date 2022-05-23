import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://marvel02-backend.herokuapp.com/characters"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div className="char">
      {isLoading === true ? (
        <h1>Loading...</h1>
      ) : (
        <div className="card">
          {data.results.map((character) => {
            console.log(character, "lalalalala");
            return (
              <Link to={`/comics/${character._id}`} key={character._id}>
                <div>
                  <h2>{character.name}</h2>
                  <img
                    src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`}
                    alt=""
                  />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Characters;
