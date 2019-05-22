import React from 'react'


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
}
export default Form;