import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import telegram from '../assets/telegram.png'
import { admin1, votingPerson } from '../assets'

function Home() {
    return (
        <Fragment>

            {/* Brand & Login */}
            <div>
                <h1>SUFFRAGE</h1>
                <Link to='/login'>Login</Link>
            </div>

            {/* Hero Section */}
            <div>
                <div>
                    <p>This is a <span>RIGHT TO VOTE</span></p>
                    <p>Polling made easy for all types of events. Live Polling and managing predictable outcomes.</p>
                    <Link to="/">Get Started</Link>
                </div>
                <div>
                    <img src={admin1} alt="admin panel" />
                    <img src={votingPerson} alt="voting person" />
                </div>
            </div>

            {/* Social Media Handles */}
            <div>

            </div>
        </Fragment>
    )
}

export default Home