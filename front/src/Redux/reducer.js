import { ADD_FAV, REMOVE_FAV, FILTER, ORDER  } from "./action-types";








const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: ''  
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
        errors: ''
      };
  
    case 'REMOVE_FAV':
      return {
        ...state,
        myFavorites: action.payload,
        errors: ''
      };
  
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
  
    case "ERROR":
      return {
          ...state,
          errors: action.payload
      }
    default:
        return state
  }
}

export default reducer;