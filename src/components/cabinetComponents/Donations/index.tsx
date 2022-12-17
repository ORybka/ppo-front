import React from 'react';
import './donations.scss';

function Donations() {
    return (
        <div className='cabinet-block donations-container'>
            <div className="title-container">
                <img src={`${process.env.PUBLIC_URL}/assets/images/cabinet-icons/donations.svg`} alt=""/>
                <h4 className='block-title title-underline'>Донати направлені на:</h4>
            </div>
            <div className="content-block">
                <p>В даному розділі ви зможете побачити на які заявки були задіяні ваші донати</p>
            </div>
        </div>
    );
}

export default Donations;