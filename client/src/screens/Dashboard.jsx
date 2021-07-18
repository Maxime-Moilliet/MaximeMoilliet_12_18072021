import React from 'react'
import { UserInfo } from '../components/UserInfo'

export class Dashboard extends React.Component {
    render () {
        return (
            <main className="container__main">
                <UserInfo />
            </main>
        )
    }
}
