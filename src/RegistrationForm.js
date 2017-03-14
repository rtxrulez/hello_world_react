import React, {Component} from 'react'
import './RegistationForm.css'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('Submit')
    }

    handleEmailChange(event) {
        console.log('Change: ', this)
        this.setState({email: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    className="emailField"
                />
                <button className='submitBtn' type='submit'>Save</button>
            </form>
        )
    }
}

export default RegistrationForm
