import React, { useContext, useState } from 'react'
import CityContext from "../../context/city/cityContext"

const CityFilter = () => {

    const cityContext = useContext(CityContext)

    const [text, setText] = useState("")
    const { filterCity, clearFilter } = cityContext


    const onChange = e => {
        setText(e.target.value)
        filterCity(e.target.value)
    }

    const allClear = () => {
        clearFilter()
        setText("")
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={text}
                    placeholder="Find your city....."
                    onChange={onChange}
                />
            </form>
            <div>
                {text !== "" &&
                    (<button className="btn btn-light btn-block"
                        onClick={allClear}
                    >
                        Clear
            </button>)}
            </div>
        </div>

    )
}

export default CityFilter
