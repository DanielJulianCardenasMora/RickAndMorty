import { ADD_FAV, REMOVE_FAV, FILTER, ORDER  } from "./action-types";








const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [action.payload, ...state.allCharacters],
                allCharacters: [action.payload, ...state.allCharacters]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)

            }
        case FILTER:
            const filtered = state.allCharacters.filter(character => character.gender === action.payload)
            return {
                ...state,
                myFavorites: action.payload === 'All' ? state.allCharacters : filtered
            }
        case ORDER:
            const ordered = state.myFavorites.sort((a, b) => {
                if (action.payload === 'A') return a.id - b.id
                return b.id - a.id
            })
            return {
                ...state,
                myFavorites: [...ordered]
            }
        
        default:
            return {...state}
    }
}

export default reducer;