import React from 'react';
import {useNavigate} from "react-router-dom";

function CabinetButton() {
    const navigate = useNavigate();
    return <div className='cabinet-btn' onClick={() => navigate('/cabinet/')}>Особистий кабінет</div>;
}

export default CabinetButton;