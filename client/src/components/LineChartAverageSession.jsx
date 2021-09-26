import React from 'react'
import { UidContext } from '../context/UidContext'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import { LineChartAverageSessionCustomTooltip } from './LineChartAverageSessionCustomTooltip'
import Service from '../services/services'

export class LineChartAverageSession extends React.Component {
    static contextType = UidContext

    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
        this.service = new Service()
    }

    componentDidMount() {
        const uid = this.context
        /**
         * function called API and setData with response API. If error, log error message in console
        */
        const fetchUserAverageSession = async () => {
            try {
                const averageSessions = await this.service.getUserAverageSessions(uid)
                this.setState({data: averageSessions})
            } catch(err) {
                window.location.pathname = "/not-found"
            }
        }
        fetchUserAverageSession()
    }

    /**
     * Format day number in day letter
     * @param {Array} data 
     * @returns {String} value
     */
    formattedDay(data) {
        let value = ""
        switch (data.day) {
            case 1:
                value = "L"
                break;
            case 2:
                value = "M"
                break;
            case 3:
                value = "M"
                break;
            case 4:
                value = "J"
                break;
            case 5:
                value = "V"
                break;
            case 6:
                value = "S"
                break;
            case 7:
                value = "D"
                break;
            default:
                value = ""
        }
        return value
    }

    render () {
        const { data } = this.state
        return (
            <section className="lineChartAverageSession">
                <h3 className="lineChartAverageSession__title">Durée moyenne des sessions</h3>
                <LineChart
                width={220}
                height={150}
                data={data}
                margin={{
                    top: 10,
                    right: 10,
                    left: 10,
                    bottom: 5,
                  }}
                >
                    <XAxis tickSize={18} tick={{stroke: '#ffffff', strokeWidth: .2}} axisLine={false} tickLine={false} dataKey={this.formattedDay} />
                    <YAxis hide={true} />
                    <Tooltip cursor={false} content={<LineChartAverageSessionCustomTooltip/>} />
                    <Line label={false} type="monotone" width={400} strokeWidth={2} dot={false} activeDot={{stroke: "rgba(255, 255, 255, 0.2)", strokeWidth: 10, r: 5}} dataKey="sessionLength" stroke="#ffffff" />
                </LineChart>
            </section>
        )
    }
}