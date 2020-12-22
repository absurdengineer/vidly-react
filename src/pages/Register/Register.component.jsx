import React from 'react'
import Joi from 'joi-browser'
import Form from '../../components/Form/Form.component';
import { register } from '../../services/userService';
import { toast } from 'react-toastify';

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
        name : Joi.string().required().label('Full Name'),
        username : Joi.string().email().required().label('Username'),
        password : Joi.string().min(5).required().label('Password')
    }
    
    async doSubmit() {
        try {
            const {headers} = await register(this.state.data)
            localStorage.setItem('token',headers['x-auth-token'])
            this.setState({data : { name : '', username : '', password : '' }})
            console.log('Submitted!!!!')
            toast.success('User Created Successfully!!!')
            this.props.history.push('/')
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