import React from 'react'
import Joi from 'joi-browser'
import Input from '../Input/Input.component';
import Form from '../Form/Form.component';

class LoginForm extends Form {
    state = { 
        data : {
            username : '', 
            password : ''
        },
        errors : {} 
    }
    schema = {
        username : Joi.string().required().label('Username'),
        password : Joi.string().required().label('Password')
    }
    
    doSubmit() {
        this.setState({data : {username : '', password : '' }})
        console.log('Submitted!!!!')
    }
    render() { 
        const {username, password} = this.state.data
        const {errors} = this.state
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input autoFocus type='text' error={errors.username} value={username} name='username' label='Username' handleChange={this.handleChange} />
                    <Input type='password' error={errors.password} value={password} name='password' label='Password' handleChange={this.handleChange} />
                    <button disabled={this.validate()} className='btn btn-primary btn-lg'>Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;