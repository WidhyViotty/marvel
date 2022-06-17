import { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit] = useState(100);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get(
          `https://marvel02-backend.herokuapp.com/comics?limit=${limit}&skip=${skip}&title=${searchTerm}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchComics();
  }, [skip, limit, searchTerm]);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="app">
      <input
        type="text"
        className="searchbar"
        placeholder="Find your comics"
        onChange={handleSearchTerm}
        style={{
          borderColor: "#ED171E",
          borderRadius: 5,
        }}
      />
      <div className="char">
        {isLoading === true ? (
          <h1>Loading...</h1>
        ) : (
          <div className="card">
            {data.results.map((comics) => {
              return (
                <div key={comics._id}>
                  <h2>{comics.title}</h2>
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
      <div className="pagination">
        <button onClick={() => setSkip(skip - limit)}>Previous</button>
        <button onClick={() => setSkip(skip + limit)}>Next</button>
      </div>
    </div>
  );
};

export default Comics;
