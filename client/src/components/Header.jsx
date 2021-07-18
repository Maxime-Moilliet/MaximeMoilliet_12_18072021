import React from 'react'
import { Link } from 'react-router-dom'

export class Header extends React.Component {
    render () {
        return (
            <header className="header">
                <Link to="/" className="header__logo">
                    <img className="header__logo-img" src="./images/Logo.png" alt="logo SportSee" />
                    <h1 className="header__logo-title" >SportSee</h1>
                </Link>
                <nav className="header__nav">
                    <Link className="header__nav-link" to="/">Accueil</Link>
                    <Link className="header__nav-link" to="/">Profil</Link>
                    <Link className="header__nav-link" to="/">Réglage</Link>
                    <Link className="header__nav-link" to="/">Communauté</Link>
                </nav>
            </header>
        )
    }
}