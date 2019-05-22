import React from 'react'
import Friend from './Friend'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
           friends: this.friend,
           NewFriend:{
               age:'',
               name:'',
               email:''
           } 
        }
    }
    render() {
        return(
            <div>
                <form>
                    <input type='text' id='name' placeholder='Name' />
                    <input type='number' id='age' placeholder='Age' />
                    <input type='email' id='email' placeholder='Email'/>
                    <button type='submit'>New Friend</button>
                    </form>

            </div>
        )
    }
}
export default Form;