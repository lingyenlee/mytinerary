import {
    ADD_FAVOURITE, DELETE_FAVOURITE, GET_FAVOURITES
} from "../types"

export default (state, action) => {

    switch (action.type) {
        case ADD_FAVOURITE:
            return {
                ...state,
                loading: false,
            }
        case GET_FAVOURITES:
            return {
                ...state,
                favourites: action.payload,
                loading: false
            }
        case DELETE_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter(fav => fav._id !== action.payload),
                loading: false
            }
        default:
            return state

    }

}