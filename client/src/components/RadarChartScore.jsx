import React from 'react'
import { UidContext } from '../context/UidContext'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts"
import Service from '../services/services'

export class RadarChartScore extends React.Component {
    static contextType = UidContext

    constructor(props) {
        super(props)
        this.state = {
            kind: null,
            data: null
        }
        this.service = new Service()
        this.getKindNameFormatted = this.getKindNameFormatted.bind(this)
    }

    componentDidMount() {
        const uid = this.context
        /**
         * function called API and setData with response API. If error, log error message in console
         */
         const fetchUserPerformance = async () => {
            try {
                const { performance, kind } = await this.service.getUserPerformance(uid)
                this.setState({data: performance, kind: kind})
            } catch(err) {
                window.location.pathname = "/not-found"
            }
        }
        fetchUserPerformance()
    }

    getKindNameFormatted(value) {
        const { kind } = this.state
        return kind[value.kind].charAt(0).toUpperCase() + kind[value.kind].slice(1);
    }

    render () {
        const { data } = this.state
        return (
            <section className="radarChartScore">
                {data && <RadarChart width={260} height={212} cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis
                    tickSize={10}
                        dataKey={this.getKindNameFormatted}
                        stroke="#fff"
                        tickLine={false}
                        tick={{ fontSize: 11 }}
                    />
                    <Radar
                        dataKey="value"
                        stroke="#ff0000"
                        fill="#ff0000"
                        fillOpacity={0.7}
                    />
                </RadarChart>}
            </section>
        )
    }
}