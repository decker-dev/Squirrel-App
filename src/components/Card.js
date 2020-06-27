import React from 'react'

class Card extends React.Component {
    render() {
        const { title, img, description } = this.props
        return (
            <div className="card container">
                <div className="card-body">
                    <div className="row center">
                        <div className="mx-auto">
                            <img src={img} />
                        </div>
                        <div className="mx-auto row ">
                            <h1> {title} </h1>
                            <p className="text-center">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card