import React from 'react';
import { Header, Divider, Icon, Container } from 'semantic-ui-react';
import './404.scss';

export class PageNotFound extends React.Component{
    render(){
        return(
            <Container className='page-container'>
                <Divider/>
                <Header as='h1' icon color='teal' textAlign='center'>
                    <Icon size='huge' loading name='compass outline' />
                    404
                    <Header.Subheader>
                        Halaman tidak tersedia
                    </Header.Subheader>
                </Header>
                <Divider/>
                <div className="waveWrapper waveAnimation">
                    <div className="wave waveLine"></div>
                </div>
            </Container>
        )
    }
}