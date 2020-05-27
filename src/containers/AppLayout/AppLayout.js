import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../HeaderNav/HeaderNav';
import { Feeder } from '../Feeder/Feeder';

export function AppLayout(props){
    return(
        <div className='app-layout'>
            <HeaderNav/>
            <Feeder>
                {props.children}
            </Feeder>
        </div>
    )
}