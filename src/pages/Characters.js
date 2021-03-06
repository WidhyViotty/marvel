import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import ReactPaginate from "react-paginate";

const Characters = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(100);

  // const [pageNumber, SetPageNumber] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://marvel02-backend.herokuapp.com/characters?limit=${limit}&skip=${skip}&name=${searchTerm}`
        );
        console.log(response.data, "skipskipskip");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchCharacters();
  }, [skip, limit, searchTerm]);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="characters">
      <div className="search">
        <input
          type="text"
          className="searchbar"
          placeholder="Find your Heroes"
          onChange={handleSearchTerm}
          // style={{
          //   borderColor: "#ED171E",
          //   borderRadius: 5,
          // }}
        ></input>
      </div>
      <div className="container">
        {isLoading === true ? (
          <h1>Loading...</h1>
        ) : (
          // .filter((val) => {
          //   return val.name
          //     .toLowerCase()
          //     .includes(searchTerm.toLowerCase());
          // })
          <div className="grid">
            {data.results.map((character) => {
              console.log(character, "lalalalala");
              return (
                <Link to={`/comics/${character._id}`} key={character._id}>
                  <div class="card">
                    <img
                      class="imgChar"
                      src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`}
                      alt=""
                    />
                    <h2 class="name">{character.name}</h2>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <div className="pagination">
        <button className="previous" onClick={() => setSkip(skip - limit)}>
          Previous
        </button>
        <button className="next" onClick={() => setSkip(skip + limit)}>
          Next
        </button>
        {/* <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={15}
          onPageChange={ }
        /> */}
      </div>
    </div>
  );
};

export default Characters;
