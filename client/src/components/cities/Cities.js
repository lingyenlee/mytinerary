import React, { useContext, useEffect } from 'react'
import CityContext from "../../context/city/cityContext"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import CityItem from './CityItem'
import Spinner from "../layout/spinner"


const Cities = () => {

    const cityContext = useContext(CityContext)
    const { cities, getCities, filtered, loading } = cityContext

    useEffect(() => {
        getCities()
        // eslint-disable-next-line
    }, [])

    return (
        <div >

            <div className="text-center">
                <h3>Click on itineraries to see what's available for each city</h3>
            </div>

            {loading
                ? <Spinner />
                : <TransitionGroup>
                    {filtered.length > 0
                        ? filtered.map(city => (
                            <CSSTransition classNames="item" timeout={500} key={city._id}>
                                <CityItem city={city} />
                            </CSSTransition>
                        ))
                        : cities.map(city => (
                            <CSSTransition classNames="item" timeout={500} key={city._id}>
                                <CityItem city={city} />
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
            }
        </div>
    )
}

export default Cities
