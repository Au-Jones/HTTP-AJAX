import React from 'react'
import Friend from './Friend'
import axios from 'axios'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: props.friends,
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
                    <input onChange={this.changeHandler} type='text' id='name' placeholder='Name' name='name' value={this.state.friend.name}/>
                    <input onChange={this.changeHandler} type='number' id='age' placeholder='Age' name='age'value={this.state.friend.age} />
                    <input onChange={this.changeHandler}  type='email' id='email' placeholder='Email' name='email' value = {this.state.friend.email} />
                    <button onChange={this.changeHandler}  type='submit'>New Friend</button>
                </form>

            </div>
        )
    }
}
export default Form;