import React from 'react'
import PropTypes from 'prop-types'

export class BarChartActivitiesCustomTooltip extends React.Component {
    render () {
        const { active, payload } = this.props
        if (active && payload && payload.length) {
            return (
              <div className="BarChartActivitiesCustomTooltip">
               <p className="BarChartActivitiesCustomTooltip__text">{`${payload[0].payload?.kilogram}kg`}</p>
               <p className="BarChartActivitiesCustomTooltip__text">{`${payload[0]?.payload?.calories}Kcal`}</p>
              </div>
            )
           }
        return null
    }
}

BarChartActivitiesCustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
}