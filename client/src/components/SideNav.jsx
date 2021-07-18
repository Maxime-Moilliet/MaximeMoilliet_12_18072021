import React from 'react'
import { Link } from 'react-router-dom'
import { BoxIcon } from '../ui/BoxIcon'

export class SideNav extends React.Component {
    render() {
        return (
            <aside className="sideNav">
                <nav className="sideNav__nav">
                    <Link to="/"><BoxIcon iconUrl='./images/character-meditates.png' iconAlt='personnage qui médite' size='xl'/></Link>
                    <Link to='/'><BoxIcon iconUrl='./images/character-swimming.png' iconAlt='personnage qui nage' size='xl'/></Link>
                    <Link to='/'><BoxIcon iconUrl='./images/character-bike.png' iconAlt='personnage qui fait du vélo' size='xl'/></Link>
                    <Link to='/'><BoxIcon iconUrl='./images/character-alters.png' iconAlt='image altère' size='xl'/></Link>
                </nav>
                <p className="sideNav__copiryght">Copiryght, SportSee 2020</p>
            </aside>
        )
    }
}