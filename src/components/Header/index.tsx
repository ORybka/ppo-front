import React from 'react';
import {Link, useLocation} from "react-router-dom";
import CabinetButton from "../buttons/CabinetButton";
import {headerLinksArr} from '../../data/content';
import './header.scss';

function Header() {
    const {pathname} = useLocation();

    return (
        <header className='header-container'>
            <div className="header-inner-container main-container">
                <div className="logo-block">
                    <Link to='/'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="logo"/>
                    </Link>
                </div>
                <nav className="navbar-block">
                    <ul>
                        {headerLinksArr.map((link, i) => {
                            return (<li key={i}>
                                <Link to={{pathname: `${pathname === '/' ? '' : '/'}`, hash: `${link.hash ? link.hash : ''}`}}>{link.text}</Link>
                            </li>)
                        })}
                        <li>
                            <CabinetButton title={'Особистий кабінет'} />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;