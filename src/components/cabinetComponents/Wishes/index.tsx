import React from 'react';
import WishesColumn from "../WishesColumn";
import MainButton from "../../buttons/MainButton";
import ApplicationPopup from "../../popups/ApplicationPopup";
import {CabinetElementType, PopupType} from "../../../data/types";
import './wishes.scss';

function Wishes() {
    return (
        <div className='cabinet-block wishes-container'>
            <ApplicationPopup type={PopupType.noApplications} />
            <div className="title-container">
                <img src={`${process.env.PUBLIC_URL}/assets/images/cabinet-icons/wishes.svg`} alt=""/>
                <h4 className='block-title'>Ваші  палкі побажання русні</h4>
                <MainButton title={'+'} />
            </div>
            <div className="content-block">
                <WishesColumn type={CabinetElementType.form} />
                <WishesColumn type={CabinetElementType.sent} />
                <WishesColumn type={CabinetElementType.transferred} />
            </div>
        </div>
    );
}

export default Wishes;