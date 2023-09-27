import { createContext } from 'react';
import { useState, useEffect } from 'react';

const MyContext = createContext()

const MyContextProvider = ({ children }) => {
    const [ people, setPeople ] = useState([]);


    useEffect(() => {
        fetch('https://swapi.dev/api/people')
          .then((response) => response.json())
          .then((responseData) => {
            setPeople(responseData.results);
          })
          .catch((error) => {
            console.error('Помилка отримання даних:', error);
          });
    },[]);

    
    return (
        <>
            <MyContext.Provider value={ people }>
                {children}
            </MyContext.Provider>  
        </>
    );
};

export { MyContext, MyContextProvider};