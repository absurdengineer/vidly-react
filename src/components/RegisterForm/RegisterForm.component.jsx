import React from 'react'
import Joi from 'joi-browser'
import Form from '../Form/Form.component';

class RegisterForm extends Form {
    state = { 
        data : {
            name : '',
            username : '', 
            password : ''
        },
        errors : {} 
    }
    schema = {
        name : Joi.string().required().label('Full Name'),
        username : Joi.string().email().required().label('Username'),
        password : Joi.string().min(5).required().label('Password')
    }
    
    doSubmit() {
        this.setState({data : { name : '', username : '', password : '' }})
        console.log('Submitted!!!!')
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
 
export default RegisterForm;