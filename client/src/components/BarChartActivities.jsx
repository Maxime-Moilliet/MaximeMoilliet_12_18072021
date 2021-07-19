import React from 'react'
import { UidContext } from '../context/UidContext'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import axios from 'axios'
import { BarChartActivitiesCustomTooltip } from './BarChartActivitiesCustomTooltip'

export class BarChartActivities extends React.Component {
    static contextType = UidContext

    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        const uid = this.context
        /**
         * function called API and setData with response API. If error, log error message in console
        */
        const fetchUserActivities = async () => {
            try {
                const response = await axios.get(`/user/${uid}/activity`)
                this.setState({data: response.data.data.sessions})
            } catch(err) {
                console.log(`failed API get user activities /user/:id/activity ${err?.message}`)
            }
        }
        fetchUserActivities()
    }

    render () {
        const { data } = this.state

        let minYCalorie
        let maxYCalorie
        let minYKilogram
        let maxYKilogram
        if(data) {
            const dataArrayCalorie = data.map(el => el.calories)
            const dataArrayKilogram = data.map(el => el.kilogram)
            minYCalorie = Math.min(...dataArrayCalorie) - 50
            maxYCalorie = Math.max(...dataArrayCalorie) + 50
            minYKilogram = Math.min(...dataArrayKilogram) - 3
            maxYKilogram = Math.max(...dataArrayKilogram) + 3
        }

        return (
            <section className='barChartActivities'>
                <div className='barChartActivities__head'>
                    <h3 className='barChartActivities__head-title'>Activité quotidiennne</h3>
                    <ul className='barChartActivities__head-legend'>
                        <li className='barChartActivities__head-info'>Poids (kg)</li>
                        <li className='barChartActivities__head-info'>Calories brûlées (kCal)</li>
                    </ul>
                </div>

                <BarChart width={800} height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis tickSize={20} axisLine={false} tickLine={false} dataKey="day" tick={{stroke: '#9B9EAC', strokeWidth: .1}}  />
                    <YAxis tickSize={20} domain={[minYKilogram, maxYKilogram]} axisLine={false} interval="number" tickCount={3.5} tickLine={false} yAxisId="kilo" orientation="right" tick={{stroke: '#9B9EAC', strokeWidth: .1}} />
                    <YAxis domain={[minYCalorie, maxYCalorie]} yAxisId="cal" hide={true}/> 
                    <Tooltip content={<BarChartActivitiesCustomTooltip />}/>
                    <Bar yAxisId="kilo" dataKey="kilogram" fill="#282D30" barSize={7} radius={20} />
                    <Bar yAxisId="cal" dataKey="calories" fill="#E60000" barSize={7} radius={20} />
                </BarChart> 
            </section>
        )
    }
}