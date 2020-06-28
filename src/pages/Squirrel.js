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
                <form>
                    <div className="form-group">
                        <label >Example select</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </form>

            </div>
        )
    }
}
export default Squirrel