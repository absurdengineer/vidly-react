import React, { Component } from 'react'
import Button from '../Button/Button.component';
import Input from '../Input/Input.component';

class LoginForm extends Component {
    state = { 
        account : {
            username : '', 
            password : ''
        },
        errors : {} 
    }
    validate = () => {
        const {username, password} = this.state.account
        const errors = {}
        if(username.trim() === '') 
        errors.username = 'Username is required.'
        if(password.trim() === '') 
        errors.password = 'Password is required.'
        return !Object.keys(errors).length ? null : errors
    }
    validateProperty = ({name, value}) => {
        if(name === 'username') {
            if(value.trim() === '') return 'Username is required.'
        }
        if(name === 'password') {
            if(value.trim() === '') return 'Password is required.'
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(e.target)
        if(errorMessage) errors[name] = errorMessage
        else delete errors[name]
        const account = {...this.state.account}
        account[name] = value
        this.setState({account, errors})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const errors = this.validate()
        this.setState({errors : errors || {} })
        if(errors) return

        this.setState({account : {username : '', password : '' }})
        console.log('Submitted!!!!')
    }

    render() { 
        const {username, password} = this.state.account
        const {errors} = this.state
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input autoFocus type='text' error={errors.username} value={username} name='username' label='Username' handleChange={this.handleChange} />
                    <Input type='password' error={errors.password} value={password} name='password' label='Password' handleChange={this.handleChange} />
                    <Button className='btn btn-primary btn-lg'>Login</Button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;