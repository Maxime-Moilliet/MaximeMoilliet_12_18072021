import React from 'react'
import { UidContext } from '../context/UidContext'
import { PieChart, Pie, Label, Cell } from "recharts"
import { RoundChartScoreCustomLabel } from './RoundChartScoreCustomLabel'
import Service from '../services/services'

export class RoundChartScore extends React.Component {
    static contextType = UidContext

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.service = new Service()
    }

    componentDidMount() {
        const uid = this.context
        /**
         * function called API and setData with response API. If error, log error message in console
        */
        const fetchUserScoreToday = async () => {
            try {
                const todayScore = await this.service.getUserTodayScore(uid)
                this.setState({data: todayScore})
            } catch(err) {
                window.location.pathname = "/not-found"
            }
        }
        fetchUserScoreToday()
    }
    
    
    render () {
        const { data } = this.state
        return (
            <section className="roundChartScore">
                <h3 className="roundChartScore__title">Score</h3>
                <PieChart width={250} height={185}>
                    <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={80}
                    startAngle={90}
                    >
                    {data.map((el, idx) => {
                        if (idx === 1) {
                        return (
                            <Cell
                            key={`cell-${idx}`}
                            fill="#fbfbfb"
                            stroke-linecap="round"
                            />
                        );
                        }
                        return <Cell key={`cell-${idx}`} fill="#ff0000" />;
                    })}
                    <Label
                        content={<RoundChartScoreCustomLabel value={data[0]?.value} />}
                        position="center"
                    />
                    </Pie>
                </PieChart>
            </section>
        )
    }
}