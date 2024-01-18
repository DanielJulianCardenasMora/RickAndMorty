import { ADD_FAV, REMOVE_FAV } from "./action-types";








const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[action.payload, ...state.myFavorites]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            }
        default:
            return {...state}
    }
}

export default reducer;