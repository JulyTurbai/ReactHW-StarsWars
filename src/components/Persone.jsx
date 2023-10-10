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
                (
                ))  
            }
        </>
    );
};

export default Persone;

