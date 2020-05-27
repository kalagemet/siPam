import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Footer.scss';

export class Footer extends React.Component{
    render(){
        return(
            <footer className='footer'>
                <h2 className='footer-title'>Sistem Informasi Pam</h2>
                <div>
                    <Icon circular inverted color='teal' name='instagram' />
                    <Icon circular inverted color='teal' name='mail' />
                    <Icon circular inverted color='teal' name='whatsapp' />
                    <Icon circular inverted color='teal' name='copyright' />
                </div>
            </footer>
        )
    }
}

export default Footer;