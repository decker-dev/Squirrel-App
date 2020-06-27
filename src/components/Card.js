import React from 'react'
const red ="#fff"
class Card extends React.Component {
    constructor(props){
        super(props)
        this.state={
            image:'https://avatars0.githubusercontent.com/u/59459088?s=460&u=b7742094c605876db8a05faa733efa3e71b40ea4&v=4'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                image:'https://github.githubassets.com/images/icons/emoji/shipit.png'
            })
        },200)
    }
    render() {
        const { title, img, description } = this.props
        return (
            <div className="card container" 
            style={{ background:red
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="mx-auto">
                            <img src={this.state.image} />
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