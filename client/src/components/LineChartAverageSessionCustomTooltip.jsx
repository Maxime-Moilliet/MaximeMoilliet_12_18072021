import React from 'react'
import PropTypes from 'prop-types'

export class LineChartAverageSessionCustomTooltip extends React.Component {
    render () {
        const { active, payload } = this.props
        if (active && payload && payload.length) {
            return (
                <div className="lineChartAverageSessionCustomTooltip">
                    <p className="lineChartAverageSessionCustomTooltip__text">{`${payload[0].payload?.sessionLength}min`}</p>
                </div>
            )
           }
        return null
    }
}

LineChartAverageSessionCustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
}