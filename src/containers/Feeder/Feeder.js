import React from 'react';
import './Feeder.scss';
import { Footer } from '../Footer/Footer';
import { SideBar } from '../SideBar/SideBar';

export function Feeder (props) {
    return(
        <React.Fragment>
            <SideBar/>
            <div className='feed'>
                {props.children}
            </div>
            <Footer/>
        </React.Fragment>
    )
}