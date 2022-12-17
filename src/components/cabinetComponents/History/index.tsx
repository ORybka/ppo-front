import React from 'react';
import './history.scss';

function History() {
    return (
        <div className='cabinet-block history-container'>
            <div className="title-container">
                <img src={`${process.env.PUBLIC_URL}/assets/images/cabinet-icons/history.svg`} alt=""/>
                <h4 className='block-title title-underline'>Історія:</h4>
            </div>
            <div className="content-block">
                <p>Тут ви мможете відслідковувати всі зміни по вашій заявці</p>
            </div>
        </div>
    );
}

export default History;