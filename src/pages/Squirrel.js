import React from 'react'
import Card from '../components/Card'
import Hello from '../components/Hello';
class Squirrel extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    username="Decker"
                />
                <Card
                    title="Detective"
                    description="Aliquip deserunt nisi ipsum consequat non. Cupidatat id proident sint non aliquip. Dolor nostrud cupidatat dolor dolore et occaecat sint nostrud id do quis aliqua duis commodo. Amet anim laborum cupidatat laborum mollit aute ex enim Lorem ea eiusmod esse. Do commodo deserunt aliquip non duis elit do do excepteur sunt."
                    img="https://github.githubassets.com/images/icons/emoji/shipit.png"

                />
                <Card
                    title="Ardilla"
                    description="Aliquip deserunt nisi ipsum consequat non. Cupidatat id proident sint non aliquip. Dolor nostrud cupidatat dolor dolore et occaecat sint nostrud id do quis aliqua duis commodo. Amet anim laborum cupidatat laborum mollit aute ex enim Lorem ea eiusmod esse. Do commodo deserunt aliquip non duis elit do do excepteur sunt."
                    img="https://github.githubassets.com/images/icons/emoji/shipit.png"
                />
            </div>
        )
    }
}
export default Squirrel