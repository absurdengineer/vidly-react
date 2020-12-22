import React from 'react'
import Joi from 'joi-browser'
import Form from '../../components/Form/Form.component';
import { register } from '../../services/userService';

class Register extends Form {
    state = { 
        data : {
            name : '',
            username : '', 
            password : ''
        },
        errors : {} 
    }
    schema = {
        name : Joi.string().min(2).required().label('Full Name'),
        username : Joi.string().email().required().label('Username'),
        password : Joi.string().min(5).required().label('Password')
    }
    
    async doSubmit() {
        try {
            await register(this.state.data)
            window.location = '/'
        } catch (error) {
          if(error.response && error.response.status === 400){
                const errors = { ...this.state.errors }
                errors.username = error.response.data
                this.setState({errors})
          }            
        }
    }
    render() { 
        return ( 
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('name','Full Name')}
                    {this.renderInput('username','Username')}
                    {this.renderInput('password','Password','password')}
                    {this.renderButton('Register')}
                </form>
            </div>
         );
    }
}
 
export default Register;