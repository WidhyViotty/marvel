import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();
  console.log(characterId, "test");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics/${characterId}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchCharacters();
  }, [characterId]);

  return (
    <div className="container">
      {isLoading === true ? (
        <h1>Loading...</h1>
      ) : (
        <div className="">
          <div className="cardComicsChar">
            <img
              className="comCharImg"
              src={`${data.thumbnail.path}/standard_large.${data.thumbnail.extension}`}
              alt=""
            />
            <h2 className="comCharName">{data.name}</h2>
            <p className="description">{data.description}</p>
          </div>
          <div className="gridComics">
            {data.comics.map((item, index) => {
              return (
                <div className="cardComics" key={index}>
                  <img
                    className="imgCom"
                    src={item.thumbnail.path + "." + item.thumbnail.extension}
                    alt=""
                  ></img>
                  <h2 className="title">{item.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Characters;
