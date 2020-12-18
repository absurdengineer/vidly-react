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

        console.log('Submitted!!!!')
    }

    render() { 
        const {username, password} = this.state.account
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <Input autoFocus type="text" id='username' name='username' className="form-control" value={username} handleChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input type="password" id='password' name='password' className="form-control" value={password} handleChange={this.handleChange}/>
                    </div>
                    <Button className='btn btn-primary btn-lg'>Login</Button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;