import React, {FunctionComponent} from 'react';

type MainButtonProps = {
    title: string,
}

const MainButton: FunctionComponent<MainButtonProps> = ({title}) => {
    return <div className='main-btn' onClick={() => console.log(title)}>{title}</div>;
}

export default MainButton;