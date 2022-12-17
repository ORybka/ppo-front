import React from 'react';
import './certificates.scss';

function Certificates() {
    return (
        <div className='cabinet-block certificates-container'>
            <div className="title-container">
                <img src={`${process.env.PUBLIC_URL}/assets/images/cabinet-icons/certificates.svg`} alt=""/>
                <h4 className='block-title title-underline'>Ваші  сертифікати:</h4>
            </div>
            <div className="content-block">
                <p>З даного розділу ви зможете завантажити сертифікат з вашим підписом на снаряді після того, як презставники ЗСУ відправлять нам фотозвіт</p>
            </div>
        </div>
    );
}

export default Certificates;