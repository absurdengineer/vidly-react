import { Component } from 'react'
import Joi from 'joi-browser'
import Input from '../Input/Input.component'

class Form extends Component {
    state = { 
        data : {},
        errors : {}
    }
    validate = () => {
        const {username, password} = this.state.data
        const options = {abortEarly : false }
        const {error} = Joi.validate({username, password}, this.schema, options)
        if(!error) return null
        const errors = {} 
        for(let item of error.details)
            errors[item.path[0]] = item.message
        return errors
    }
    validateProperty = ({name, value}) => {
        const obj = {
            [name] : value
        }
        const schema = { [name] : this.schema[name] }
        const {error} = Joi.validate(obj, schema)
        return !error ? null : error.details[0].message
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const errors = this.validate()
        this.setState({errors : errors || {} })
        if(errors) return
        this.doSubmit()
    }
    handleChange = (e) => {
        const {name, value} = e.target
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(e.target)
        if(errorMessage) errors[name] = errorMessage
        else delete errors[name]
        const data = {...this.state.data}
        data[name] = value
        this.setState({data, errors})
    }
    renderButton(label) {
        return (
            <button disabled={this.validate()} className='btn btn-primary btn-lg'>{label}</button>
        )
    }
    renderInput(name, label, type='text'){
        const {errors, data} = this.state
        return <Input 
                    type={type}
                    error={errors[name]} 
                    value={data[name]} 
                    name={name} 
                    label={label} 
                    handleChange={this.handleChange} 
                />
    }
}
 
export default Form;