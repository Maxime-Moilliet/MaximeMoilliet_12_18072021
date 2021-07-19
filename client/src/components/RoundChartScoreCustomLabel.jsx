import React from 'react'
import PropTypes from "prop-types"

export class RoundChartScoreCustomLabel extends React.Component {
    render () {
        const { value, viewBox } = this.props
        const { cx, cy } = viewBox

        return (
            value && <>
            <text x={cx - 15} y={cy - 5}>
                <tspan className="roundChartScoreCustomLabel__percent">
                    {`${value * 100}%`}
                </tspan>
            </text>
            <text x={cx - 25} y={cy + 20}>
                <tspan className="roundChartScoreCustomLabel__text">
                    de votre
                </tspan>
            </text>
            <text x={cx - 23} y={cy + 40}>
                <tspan className="roundChartScoreCustomLabel__text">
                    objectif
                </tspan>
            </text>
            </>
        )
    }
}

RoundChartScoreCustomLabel.propTypes = {
    value: PropTypes.number,
    viewBox: PropTypes.object
}