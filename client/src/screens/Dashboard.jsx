import React from 'react'
import { UserInfo } from '../components/UserInfo'
import { BarChartActivities } from '../components/BarChartActivities'
import { LineChartAverageSession } from '../components/LineChartAverageSession'

export class Dashboard extends React.Component {
    render () {
        return (
            <main className="container__main">
                <UserInfo />
                <div className="dashboard">
                    <div className="dashboard__container">
                        <div className="dashboard__container-left">
                            <BarChartActivities />
                            <div className="dashboard__container-left-bottom">
                                <LineChartAverageSession />
                                {/* <RadarChartScore /> */}
                                {/* <PieChartScore /> */}
                            </div>
                        </div>
                        <div className="dashboard__container-right">
                            {/* <KeyData /> */}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
