import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from '../pages/Landing'
import Edit from "../pages/Edit"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/:id" component={Edit} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter