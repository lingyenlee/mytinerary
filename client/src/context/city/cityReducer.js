import {
    GET_CITIES,
    GET_CITY_ITINERARIES,
    FILTER_CITY,
    CLEAR_FILTER,
    CITY_ERROR,
    CLEAR_CITY_ITINERARIES
} from "../types"

export default (state, action) => {
    switch (action.type) {
        case GET_CITIES:
            //console.log("reducer", action.payload)
            return {
                ...state,
                cities: action.payload,
                loading: false
            }
        case GET_CITY_ITINERARIES:
            return {
                ...state,
                cityItineraries: action.payload,
                isOpen: true,
                loading: false
            }
        case FILTER_CITY:
            return {
                ...state,
                filtered: state.cities.filter(city => {
                    const regex = new RegExp(`${action.payload}`, 'gi')
                    return city.cityName.match(regex)
                }),
                loading: false
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: [],
                loading: false
            }
        case CITY_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_CITY_ITINERARIES:
            return {
                ...state,
                cityItineraries: []
            }
        default:
            return state
    }
}