import React from 'react'
import { Link } from 'react-router-dom'
const Hello = ({ username }) => (
    <div className="container-fluid"
        style={{
            padding: "0px"
        }}
    >
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/squirrel/new">
                {username}

            </Link>
        </nav>
    </div>
)

export default Hello