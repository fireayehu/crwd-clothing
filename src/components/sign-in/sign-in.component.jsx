import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''});
    }
    handleChange = event =>{
        const {value,name} = event.target;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange = {this.handleChange}
                        label = 'Email'
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange = {this.handleChange}
                        label = 'Password'
                        required
                    />
                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        );
    }
}

export default SignIn;