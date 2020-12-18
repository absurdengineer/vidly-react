import React, { Component } from 'react'
import Button from '../Button/Button.component';
import Input from '../Input/Input.component';

class LoginForm extends Component {
    state = { 
        account : {
            username : '', 
            password : ''
        } 
    }
    handleChange = (e) => {
        const {name, value} = e.target
        const account = {...this.state.account}
        account[name] = value
        this.setState({account})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({account : {username : '', password : '' }})
        console.log('Submitted!!!!')
    }

    render() { 
        const {username, password} = this.state.account
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input autoFocus type='text' value={username} name='username' label='Username' handleChange={this.handleChange} />
                    <Input type='password' value={password} name='password' label='Password' handleChange={this.handleChange} />
                    <Button className='btn btn-primary btn-lg'>Login</Button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;