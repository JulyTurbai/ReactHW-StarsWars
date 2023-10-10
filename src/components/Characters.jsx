import { useContext, useEffect, useState } from "react";
import { StarsContext } from "../store/persons";

const Characters = () => {
  const [state, dispatch] = useContext(StarsContext);
  const [charactersInfo, setCharactersInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((responseData) => {
        dispatch({ type: 'SHOW', payload: responseData.results });
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Помилка отримання даних:', error);
      });
  }, [dispatch]);

  const fetchCharacters = () => {
    document.querySelector('.info').classList.remove('none');
    if (state[0]) {
      const characters = state[0].map((item, index) => (
        <div className="card" key={window.crypto.randomUUID()}>
          <div className="card__img">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
              alt=""
            />
          </div>
          <p className="card__name">Name: {item.name}</p>
          <p className="card__birth">Birth year: {item.birth_year}</p>
          <p className="card__height">Height: {item.height}</p>
          <p className="card__mass">Mass: {item.mass}</p>
        </div>
      ));
      setCharactersInfo(characters);
     
      
    }
  };

  return (
    <>
      <button className="characters" onClick={fetchCharacters}>Characters</button>
      {isLoading ? (
      <p>Loading...</p>
      ) : (
       <div className="info" onClick={() => document.querySelector('.info').classList.add('none')}>
            {charactersInfo}
        </div>
      )}
    </>
  );
};

export default Characters;

