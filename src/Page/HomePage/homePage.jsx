import React from 'react';

import './homePage.css'
import Menu from '../../components/Menu-Item/Menu/menu';


const HomePage = (props) => {
    console.log(props)
    return (
        <div className="homepage">
           <Menu />
        </div>
    )
}

export default HomePage; 

