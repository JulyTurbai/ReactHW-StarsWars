import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../Context/MyContextProvider';
import { useState } from 'react';


const Persone = () => {
    const people = useContext(MyContext);
    const [ index, setIndex ] = useState(0);
    
    return (
        <> 
        {
           people.map((item, index ) =>  
                (<div className="persone" key={ index }>
                     <div className="persone__img" key={ index + 1 }>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${ index + 1 }.jpg`} alt="" />
                    </div>
                    <p className="persone__name">Name: { item.name }</p>
                    <p className="persone__birth">Birth year: { item.birth_year }</p>
                    <p className='persone__height'>Height: { item.height }</p>
                    <p className='persone__mass'>Mass: { item.mass }</p>
                </div>
                ))  
            }
        </>
    );
};

export default Persone;

