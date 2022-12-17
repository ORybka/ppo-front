import React from 'react';
import {Link, useLocation} from "react-router-dom";
import CabinetButton from "../buttons/CabinetButton";
import {footerLinksArr, socialLinksArr} from "../../data/content";
import './footer.scss';

function Footer() {
    const {pathname} = useLocation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer-container'>
            <div className="footer-inner-container main-container">
                <div className="main-fund-link">
                    <a href='https://all4ukraine.org/' target='_blank'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/fund-img.webp`} alt="all4Ukraine fund"/>
                    </a>
                </div>
                <div className="navlinks-container">
                    <ul>
                        {footerLinksArr.map((link, i) => {
                            return (
                                <li key={i}>
                                    <Link to={{pathname: `${pathname === '/' ? '' : '/'}`, hash: `${link.hash}`}}>{link.text}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="certificate-link">
                    <Link to='/'>Приклад сертифікату</Link>
                </div>
                <div className="follow-links">
                    <div className="footer-btn-block">
                        <CabinetButton title={'Особистий кабінет'} />
                    </div>
                    <div className="follow-links-block">
                        <ul>
                            {socialLinksArr.map(el => {
                                return (
                                    <li key={el.name}>
                                        <a href={el.link}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/follow-icons/${el.name}.svg`} alt={`${el.name} link`} />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright-block">
                <p>All4Ukraine {currentYear} © All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;