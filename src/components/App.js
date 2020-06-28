import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SquirrelNew from '../pages/SquirrelNew';
import Squirrel from '../pages/Squirrel';
import NotFound from '../pages/NotFound.js'

const App=() => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/squirrel" component={Squirrel} />
            <Route exact path="/squirrel/new" component={SquirrelNew} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)


export default App