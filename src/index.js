import React from 'react';
import ReactDom from 'react-dom';
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'
/*
const name = 'Pedro'
const user = {
    firstName: 'Decker',
    LastName: 'Urbano',
    avatar: 'https://lh3.googleusercontent.com/proxy/rQtaiFPZDSC8sP85JPxK6Qf6_oLj5gfWnAzRCRIvOQG22qVjd8WAGjINwqo89l-KBmWa3hI6Jb4eVA'
}
function getname(userf) {
    return `${userf.firstName} ${userf.LastName}`
}
function getGreeting(userf) {
    if (userf) {
        return (
            <div>
                <h1> {getname(userf)}</h1>
                <img src={userf.avatar} />
            </div>
        );
    }
    return <h1>Hello, Stranger.</h1>;
}

const element = getGreeting(user);*/

const container = document.getElementById('root')
ReactDom.render(<Card
    title="Ardilla"
    description="Aliquip deserunt nisi ipsum consequat non. Cupidatat id proident sint non aliquip. Dolor nostrud cupidatat dolor dolore et occaecat sint nostrud id do quis aliqua duis commodo. Amet anim laborum cupidatat laborum mollit aute ex enim Lorem ea eiusmod esse. Do commodo deserunt aliquip non duis elit do do excepteur sunt."
    img="https://github.githubassets.com/images/icons/emoji/shipit.png"
/>, container)