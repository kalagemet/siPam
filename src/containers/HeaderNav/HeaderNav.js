import React from 'react';
import {Form, Icon, Image, Input, Menu, Popup, Divider } from 'semantic-ui-react';
import logo from '../../assets/logo.png';
import './HeaderNav.scss';
import NotifContainer from '../NotifContainer/NotifContainer';

export class HeaderNav extends React.Component {
    render() {
        let notif = [
            { id:123, icon: 'user', date:'3 hari yang lalu', data:'ini dumy pemberitahuan'},
            { id:456, icon: 'bell', date:'12 hari yang lalu', data:'ini dumy pemberitahuan kedua'},
            { id:789, icon: 'settings', date:'33 hari yang lalu', data:'ini dumy pemberitahuan ketiga'}
        ]
        return (
            <Menu borderless className='top-menu' fixed='top'>
                <Menu.Item header className='logo'>
                    {/* logo */}
                    <Image src={logo} size='small'/>
                </Menu.Item>
                <Menu.Menu className='nav-container'>
                    {/* search */}
                    <Menu.Item className='search-input'>
                        <Form>
                            <Form.Field>
                            <Input placeholder='Search' size='small' action='Go'/>
                            </Form.Field>
                        </Form>
                    </Menu.Item>
                    {/* menu item */}
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Icon className='header-icon' name='grid layout' size='large'/>
                        </Menu.Item>
                        <Menu.Item>
                            <Popup
                                on='click'
                                position='top right'
                                trigger={
                                    <Icon className='header-icon' name='alarm' size='large' link/>
                                }
                            >
                                <Popup.Header>Notifikasi</Popup.Header>
                                <Divider/>
                                <Popup.Content>
                                    { NotifContainer(notif) }
                                </Popup.Content>
                            </Popup>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default HeaderNav;