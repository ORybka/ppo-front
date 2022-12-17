import React, {FunctionComponent, useEffect, useState} from 'react';
import {PopupProps} from '../../../data/types';
import './application-popup.scss';

const ApplicationPopup: FunctionComponent<PopupProps> = ({type}) => {
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [button, setButton] = useState<string>('');

    useEffect(() => {
        switch(type) {
            case 0:
                setTitle('Ви ще не створили жодного палкого побажання русні');
                setText('Підпишіть свій перший снаряд та чекайте сетифікат з передової');
                setButton('Підписати снаряд');
                break;
            case 1:
                setTitle('Ваша заявка відправлена!');
                setText('Дякуємо що підтримуєте збройні сили України! Щойно ми отримаємо фото вашого снаряду - сертифікат з фотографією з`явиться в вашому особистому кабінеті');
                setButton('Підписати ще один снаряд');
                break;
        }
    }, [])

    return (
        <div className='application-popup-container'>
            <div className="application-popup-inner-container">
                <h6 className='block-title'>{title}</h6>
                <p>{text}</p>
                <button className='main-btn' onClick={() => console.log(button)}>{button}</button>
            </div>
        </div>
    );
}

export default ApplicationPopup;
