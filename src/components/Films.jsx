import { useContext, useEffect, useState } from "react";
import { StarsContext } from "../store/persons";

const Films = () => {
 const [state, dispatch] = useContext(StarsContext);
 const [filmsInfo, setFilmsInfo] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
    fetch('https://swapi.dev/api/films')
      .then((response) => response.json())
      .then((responseData) => {
        dispatch({ type: 'SHOW', payload: responseData.results });
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Помилка отримання даних:', error);
      });
  }, [dispatch]);

  console.log(state[1])

  const fetchFilms= () => {
    document.querySelector('.show-films').classList.remove('none');
    
    
    if (state[1]) {
      const films = state[1].map((item, index) => (
        <div className="card" key={item.episode_id}>
          <div className="card__img">
            <img
              src={`https://starwars-visualguide.com/assets/img/films/${index + 1}.jpg`}
              alt=""
            />
          </div>
            <p className="card__title">Name: {item.title}</p>
            <p className="card__date">Release date: {item.release_date}</p>
            <p className="card__producer">Producer: {item.producer}</p>
        </div>
      ));
      setFilmsInfo(films);
      document.querySelector('.show-films').innerHTML = films;
    }
  };

  console.log(state)
    
    return (
        <>
        <button className="films" onClick={fetchFilms}>Films</button>
        {isLoading ? (
        <p>Loading...</p>
        ) : (
            <div className="show-films none">
              {filmsInfo}
            </div>
        )}
      </>
    );
};

export default Films;