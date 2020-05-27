import React from 'react';
import {SideBarItem} from './SideBarItem/SideBarItem';
import {Menu, Divider} from 'semantic-ui-react';
import {SideBarHeader} from './SideBarHeader/SideBarHeader';
import './SideBar.scss';
import { SideBarFooter } from './SideBarFooter/SideBarFooter';
import { NavLink } from 'react-router-dom';

export class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <NavLink to='/dashboard' activeClassName='actived'>
          <SideBarItem label='Dashboard' icon='home'/>
        </NavLink>
        <Divider/>
        <SideBarHeader title='Tagihan'/>
        <NavLink to='/input_tagihan' activeClassName='actived'>
          <SideBarItem label='Input Tagihan' icon='edit'/>
        </NavLink>
        <NavLink to='/bayar_tagihan' activeClassName='actived'>
          <SideBarItem label='Bayar Tagihan' icon='history'/>
        </NavLink>
        <Divider/>
        <SideBarHeader title='Managemen'/>
        <NavLink to='/pelanggan' activeClassName='actived'>
          <SideBarItem label='Pelanggan' icon='user'/>
        </NavLink>
        <NavLink to='/pembukuan' activeClassName='actived'>
          <SideBarItem label='Pembukuan' icon='book'/>
        </NavLink>
        <Divider/>
        <SideBarHeader title='Akun'/>
        <NavLink to='/histori' activeClassName='actived'>
          <SideBarItem label='Histori' icon='flag'/>
        </NavLink>
        <NavLink to='/seting' activeClassName='actived'>
          <SideBarItem label='Setting' icon='setting'/>
        </NavLink>
        <Divider/>
        <NavLink to='/log_out' activeClassName='actived'>
          <SideBarItem label='Log Out' icon='log out'/>
        </NavLink>
        <Divider/>
        <SideBarFooter title='2020 Kalagemet &copy;'/>
      </Menu>
    );
  }
}