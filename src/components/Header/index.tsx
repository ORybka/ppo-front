import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {HeaderLink} from "../../interfaces";
import './header.scss';

function Header() {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const headerLinksArr: Array<HeaderLink> = [
        {
            text: 'Головна'
        },
        {
            hash: '#conditions',
            text: 'Умови'
        },
        {
            hash: '#faq',
            text: 'FAQ'
        }
    ];

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
                        <li className='header-btn' onClick={() => navigate('/cabinet/')}>Особистий кабінет</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;