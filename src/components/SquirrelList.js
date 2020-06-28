import React from 'react'
import Card from './Card'
function SquirrelList(props) {
    return (
        <div>
            {props.SquirrelList.map((Squirrel) => {
                return (
                    <div>
                        <div>
                            <Card
                                title={Squirrel.id}
                                description="Aliquip deserunt nisi ipsum consequat non. Cupidatat id proident sint non aliquip. Dolor nostrud cupidatat dolor dolore et occaecat sint nostrud id do quis aliqua duis commodo. Amet anim laborum cupidatat laborum mollit aute ex enim Lorem ea eiusmod esse. Do commodo deserunt aliquip non duis elit do do excepteur sunt."
                                img="https://github.githubassets.com/images/icons/emoji/shipit.png"
                            />
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
export default SquirrelList