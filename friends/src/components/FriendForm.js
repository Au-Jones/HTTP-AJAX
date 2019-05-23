import React from 'react'
import Friend from './Friend'
import axios from 'axios'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: this.friend,
            NewFriend: {
                age: '',
                name: '',
                email: ''
            }
        }
    }
    changeHandler = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = e => {

        this.props.addFriend(e, this.state.friend);

        this.setState({
            friend: {
                age: '',
                name: '',
                email: ''

            }
        })
    }




    render() {
        return (
            <div>
                <form id='form' onSubmit={this.submitHandle}>
                    <input type='text' id='name' placeholder='Name' />
                    <input type='number' id='age' placeholder='Age' />
                    <input type='email' id='email' placeholder='Email' />
                    <button type='submit'>New Friend</button>
                </form>

            </div>
        )
    }
}
export default Form;