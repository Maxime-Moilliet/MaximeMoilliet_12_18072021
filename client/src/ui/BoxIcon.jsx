import React from 'react'
import PropTypes from 'prop-types'

export class BoxIcon extends React.Component {
    render () {
        const { background, iconUrl, iconAlt, size } = this.props
        return (
            <div className={size === "xl" ? "boxIcon xl" : "boxIcon"} style={{backgroundColor: background ? background : "#ffffff"}}>
                <img src={iconUrl} alt={iconAlt} />
            </div>
        )
    }
}

BoxIcon.propTypes = {
    background: PropTypes.string,
    iconUrl: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired,
    size: PropTypes.string
}