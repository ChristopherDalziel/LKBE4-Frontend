import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from '../pages/Landing'
import Edit from "../pages/Edit"
import Nav from '../components/Nav'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/:id" component={Edit} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter