import React from 'react';
import { Grid, Divider, Header, Icon } from 'semantic-ui-react';
import './Dashboard.scss';

export class Dashboard extends React.Component{
    render(){
        return(
            <div className='feed-container'>
                <Header as='h1' icon textAlign='center'>
                    <Icon name='dashboard' circular/>
                    Dashboard
                    <Header.Subheader>
                        PT. Pam Alam Tirta Sejahtra
                        Yogyakarta - Indonesia
                    </Header.Subheader>
                </Header>
                <br/>
                <Divider/>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider/>
            </div>
        )
    }
}

export default Dashboard;