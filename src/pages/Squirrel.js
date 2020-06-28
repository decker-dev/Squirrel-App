import React from 'react'
import Hello from '../components/Hello';
import SquirrelList from '../components/SquirrelList';
class Squirrel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "id": 1,
            }, {
                "id": 2,
            }]
        }
    }
    render() {
        return (
            <div>
                <Hello
                    username="Decker"
                />
                <SquirrelList
                    SquirrelList={this.state.data}
                />

            </div>
        )
    }
}
export default Squirrel