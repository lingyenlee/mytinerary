import React, { Fragment } from "react"
import { withRouter } from 'react-router'

const BackButton = (props) => {

    const handleClick = () => {
        props.history.goBack()
    }

    return (
        <Fragment>
            <button onClick={handleClick} className="btn btn-block text-primary">
                <i className="fas fa-long-arrow-alt-left"></i> {"   "}Back to Cities
            </button>
            {/* <i className="far fa-arrow-square-left fa-10x"></i> */}
        </Fragment>

    )
}

export default withRouter(BackButton)