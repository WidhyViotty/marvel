import { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get(
          "https://marvel02-backend.herokuapp.com/comics"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchComics();
  }, []);

  return (
    <div className="char">
      {isLoading === true ? (
        <h1>Loading...</h1>
      ) : (
        <div className="card">
          {data.results.map((comics) => {
            return (
              <div key={comics._id}>
                <h2>{comics.title}</h2>
                <p>{comics.description}</p>
                <img
                  src={`${comics.thumbnail.path}/standard_large.${comics.thumbnail.extension}`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comics;
