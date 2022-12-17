import React from 'react';
import Certificates from "../../components/cabinetComponents/Certificates";
import Wishes from "../../components/cabinetComponents/Wishes";
import History from "../../components/cabinetComponents/History";
import Donations from "../../components/cabinetComponents/Donations";
import './cabinet.scss';

function Cabinet() {
    return (
        <div className='cabinet-container'>
            <h1 className='title'>Особистий кабінет</h1>
            <Wishes />
            <div className="two-side-block">
                <Certificates />
                <History />
            </div>
            <Donations />
        </div>
    );
}

export default Cabinet;