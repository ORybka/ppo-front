import React from 'react';
import WishesColumn from "../WishesColumn";
import MainButton from "../../buttons/MainButton";
import './wishes.scss';

function Wishes() {
    return (
        <div className='cabinet-block wishes-container'>
            <div className="title-container">
                <img src={`${process.env.PUBLIC_URL}/assets/images/cabinet-icons/wishes.svg`} alt=""/>
                <h4 className='block-title'>Ваші  палкі побажання русні</h4>
                <MainButton title={'+'} />
            </div>
            <div className="content-block">
                <WishesColumn type={0} />
                <WishesColumn type={1} />
                <WishesColumn type={2} />
            </div>
        </div>
    );
}

export default Wishes;