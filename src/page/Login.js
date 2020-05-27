import React from 'react';
import { Grid, Header, Form, Button, Segment, Icon, Message, Transition } from 'semantic-ui-react';
import './Login.scss';

class Login extends React.Component{
    state = { 
        loading_message: false,
        redirect_message: false,
        gagal_message: false
    }

    handleDismissLoadingMessage = () => {
        this.setState({ loading_message: false })
    }
    handleDismissRedirectMessage = () => {
        this.setState({ redirect_message: false })
    }
    handleDismissGagalMessage = () => {
        this.setState({ gagal_message: false })
    }

    login_action = () => {
        this.setState({ loading_message: true})
    }

    render() {
        return (
            <Grid textAlign='center' className='login-container' verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 400 }}>
                    <Header  icon as='h2' className='login-header' textAlign='center'>
                        <Icon name='osi' iconPosition='center'/>
                        Login Sistem
                        <Header.Subheader>
                            Sistem Informasi Pam
                        </Header.Subheader>
                    </Header>
                    <Form size='large' fluid>
                        <Segment inverted raised color='teal' >
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />
                            <Form.Checkbox label='Ingat saya' textAlign='left'/>
                            <Button primary animated size='large' onClick={this.login_action}>
                                <Button.Content visible>Login</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right'/>
                                </Button.Content>
                            </Button>
                        </Segment>
                    </Form>
                    <Transition visible={this.state.loading_message} animation='drop' duration={500}>
                        <Message icon onDismiss={this.handleDismissLoadingMessage}>
                            <Icon name='circle notched' loading/>
                            <Message.Content>
                                {/* <Message.Header>Mohon Tunggu</Message.Header> */}
                                Mengautentikasi username password anda
                            </Message.Content>
                        </Message>
                    </Transition>
                    { this.state.redirect_message ? 
                    <Message
                        success
                        onDismiss={this.handleDismissRedirectMessage}
                        header='Login berhasil'
                        content='anda akan diarahkan ke halaman dashboard'
                    /> : ''}
                    {this.state.gagal_message ?
                    <Message negative onDismiss={this.handleDismissGagalMessage}>
                        <Message.Header>Login Gagal</Message.Header>
                        <p>Kata sandi atau username salah</p>
                    </Message> : ''}
                </Grid.Column>
            </Grid>
        );
    }
}

export default Login;