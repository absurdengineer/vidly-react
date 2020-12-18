import React from 'react'
import Joi from 'joi-browser'
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
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username','Username')}
                    {this.renderInput('password','Password','password')}
                    {this.renderButton('Login')}
                </form>
            </div>
         );
    }
}
 
export default LoginForm;