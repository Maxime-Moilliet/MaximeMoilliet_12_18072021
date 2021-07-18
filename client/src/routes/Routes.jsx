import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Dashboard } from '../screens/Dashboard'
import { Header } from '../components/Header'
import { SideNav } from '../components/SideNav'

export default function Routes() {
    return (
        <>
        <Header />
        <div className="container">
            <SideNav />
            <Switch>
                <Route exact path='/' component={Dashboard} />
            </Switch>
        </div>
        </>
    )
}
