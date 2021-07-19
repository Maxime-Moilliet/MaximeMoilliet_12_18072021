import React from 'react'
import PropTypes from 'prop-types'
import { BoxIcon } from './BoxIcon'

export class KeyDataCard extends React.Component {
    render () {
        const { value, name, background, iconUrl, iconAlt } = this.props
        return (
            <article className="keyDataCard">
                <BoxIcon iconUrl={iconUrl} iconAlt={iconAlt} background={background} />
                <div className="keyDataCard__content">
                    <h3 className="keyDataCard__content-value">{value}</h3>
                    <p className="keyDataCard__content-name">{name}</p>
                </div>
            </article>
        )
    }
}

KeyDataCard.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    background: PropTypes.string,
    iconUrl: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired,
}