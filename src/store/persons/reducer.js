export const initialState = [];
    
export const reducer = (state, action) => {
    switch (action.type) {
        case 'SHOW': 
            return [...state, action.payload];
        case 'HIDE': 
            return [];
        default:
            return state;
    }
}

  