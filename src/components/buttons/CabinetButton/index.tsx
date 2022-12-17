import React, {FunctionComponent} from 'react';
import {useNavigate} from "react-router-dom";

type CabinetButtonProps = {
    title: string,
}

const CabinetButton: FunctionComponent<CabinetButtonProps> = ({title}) => {
    const navigate = useNavigate();
    return <div className='cabinet-btn' onClick={() => navigate('/cabinet/')}>{title}</div>;
}

export default CabinetButton;