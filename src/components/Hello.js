import React from 'react'
function Hello(props) {

    return (
        <div className="container-fluid"
        style={{ padding:"0px"
        }}
        >
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">{props.username}</a>
            </nav>
        </div>
    )
}
export default Hello