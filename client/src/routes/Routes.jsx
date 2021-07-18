import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Dashboard } from '../screens/Dashboard'
import { Header } from '../components/Header'

export default function Routes() {
    return (
        <>
        <Header />
        <Switch>
            <Route exact path='/' component={Dashboard} />
        </Switch>
        </>
    )
}
