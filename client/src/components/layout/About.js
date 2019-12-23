import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            About this app....
            <p>
                This is an itinerary-sharing mobile web app created using React (Hooks with Context), Node.js, Express.js and MongoDB Atlas
            </p>

            <div className="py-1">
                <p>Create your own account or login with the following credentials:</p>
                <p>Email: sam@gmail.com</p>
                <p>Password: sam123</p>
            </div>

            <div>
                <p> After login, you can see a list of cities. Click on the itinerary button for each city to reveal the itineraries, if available.</p>
                <p> Click on the heart to add to or delete your favourite itineraries </p>
                <p> Go to favourite page to view your added favourite itineraries. </p>
            </div>

        </Fragment>
    )
}

export default About
