import React, {FunctionComponent, useEffect, useState} from 'react';
import {CabinetElementProps} from '../../data/types';

const WishesColumn: FunctionComponent<CabinetElementProps> = ({type}) => {
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
        switch(type) {
            case 0:
                setTitle('Оформлено');
                break;
            case 1:
                setTitle('Відправлено ЗСУ');
                break;
            case 2:
                setTitle('Передано русні від ЗСУ');
                break;
        }
    }, [])

    return (
        <div className='wishes-column-container'>
            <h6>{title}</h6>
            <div className="wishes-requests">

            </div>
        </div>
    );
}

export default WishesColumn;
