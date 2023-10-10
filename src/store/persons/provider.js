import { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { StarsContext } from ".";

export const StarsProvider = ({ children }) => {
    const [ stars, dispatch ] = useReducer(reducer, initialState);

    return <StarsContext.Provider value={[ stars, dispatch ]}>
        { children }
    </StarsContext.Provider>
}

