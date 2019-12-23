import React, { useReducer } from "react"
import axios from "axios"
import FavouriteContext from "./favouriteContext"
import favouriteReducer from "./favouriteReducer"

import {
    ADD_FAVOURITE,
    GET_FAVOURITES,
    DELETE_FAVOURITE
} from "../types"

const FavouriteState = props => {
    const initialState = {
        favourites: [],
        loading: true,
    }

    const [state, dispatch] = useReducer(favouriteReducer, initialState)

    //get favourite
    const getFavourites = async (userId) => {

        try {
            const res = await axios.get(`/api/favourites/${userId}`)
            dispatch({
                type: GET_FAVOURITES,
                payload: res.data
            })
        } catch (error) {
            console.error(error.message)
        }
    }

    //add favourite
    const addFavourite = async (userId, itineraryId) => {

        await axios.post(`/api/favourites/add/${userId}`, { itineraryId })
        dispatch({
            type: ADD_FAVOURITE,
            payload: itineraryId
        })

    }

    //delete favourite
    const deleteFavourite = async (userId, itineraryId) => {

        await axios.post(`/api/favourites/delete/${userId}`, { itineraryId })
        dispatch({
            type: DELETE_FAVOURITE,
            payload: itineraryId
        })

    }

    return (
        <FavouriteContext.Provider
            value={{
                favourites: state.favourites,
                loading: state.loading,
                addFavourite,
                getFavourites,
                deleteFavourite
            }}
        >
            {props.children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteState

