import React from 'react'
import Joi from 'joi-browser'
import Form from '../../components/Form/Form.component';
import { login } from '../../services/authService';
import { toast } from 'react-toastify';

class Login extends Form {
    state = { 
        data : {
            username : '', 
            password : ''
        },
        errors : {} 
    }
    schema = {
        username : Joi.string().email().required().label('Username'),
        password : Joi.string().min(6).max(255).required().label('Password')
    }
    
    async doSubmit() {
        try {
            await login(this.state.data)
            toast.success('Logged In Successfully')
            this.setState({data : {username : '' }})
        } catch (error) {
            if(error.response && error.response.status === 400){
                const errors = {...this.state.errors}
                errors.username = error.response.data
                this.setState({errors})
            }
        }
        this.setState({data : {password : '' }})
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
 
export default Login;