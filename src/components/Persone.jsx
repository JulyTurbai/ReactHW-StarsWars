import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../Context/MyContextProvider';


const Persone = () => {
    const people = useContext(MyContext);
    console.log(people)

    return (
        <>
            {
           people.map((item) =>  
                (<div className="persone" key={ item.index }>
                    <div className="persone__img">
                        <img src="" alt="" />
                    </div>
                    <p className="persone__name">Name: { item.name }</p>
                    <p className="persone__name">Birth year: { item.birth_year }</p>
                    <p className='persone__height'>Height: { item.height }</p>
                    <p className='persone__mass'>Mass: { item.mass }</p>
                </div>
                ))  
            }
        </>
    );
};

export default Persone;