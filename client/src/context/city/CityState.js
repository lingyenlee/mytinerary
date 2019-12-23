import React, { useReducer } from "react"
import axios from "axios"
import CityContext from "./cityContext"
import cityReducer from "./cityReducer"
import {
    GET_CITIES,
    GET_CITY_ITINERARIES,
    FILTER_CITY,
    CLEAR_FILTER,
    CITY_ERROR,
    CLEAR_CITY_ITINERARIES
} from "../types"

const CityState = props => {
    const initialState = {
        cities: [],
        filtered: [],
        cityItineraries: [],
        loading: true,
    }

    const [state, dispatch] = useReducer(cityReducer, initialState)

    //Get all cities
    const getCities = async () => {

        const res = await axios.get("/api/cities")
        // console.log(res.data)
        dispatch({
            type: GET_CITIES,
            payload: res.data
        })
    }

    //Find city
    const filterCity = text => {

        dispatch({
            type: FILTER_CITY,
            payload: text
        })
    }

    //Get itineraries by city
    const getCityItineraries = async (city) => {

        try {
            const res = await axios.get(`api/cities/${city}`)
            dispatch({
                type: GET_CITY_ITINERARIES,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: CITY_ERROR,
                payload: error.response.msg
            })
        }
    }

    //Clear filter
    const clearFilter = () =>
        dispatch({
            type: CLEAR_FILTER
        })

    //clear itineraries
    const clearItineraries = () =>
        dispatch({
            type: CLEAR_CITY_ITINERARIES
        })

    return (
        <CityContext.Provider
            value={{
                cities: state.cities,
                filtered: state.filtered,
                loading: state.loading,
                cityItineraries: state.cityItineraries,
                getCities,
                getCityItineraries,
                filterCity,
                clearFilter,
                clearItineraries
            }}
        >
            {props.children}
        </CityContext.Provider>
    )
}

export default CityState