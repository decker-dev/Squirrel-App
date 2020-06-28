import React from 'react';
import ReactDom from 'react-dom';
import './pages/Squirrel'
import 'bootstrap/dist/css/bootstrap.css'
import Squirrel from './pages/Squirrel';

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
ReactDom.render(

   <Squirrel/> , container)