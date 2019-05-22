import React from 'react';
import Form from'./components/FriendForm'
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state={
      friends:[]
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => this.setState[{friends:res.data}])
    .catch(err => console.log(err))
  }

render() {
  return(
    <div>
    <div className='friend-form'/>
    <Form friends={this.state.friends} componentDidMount={this.componentDidMount}/>
    </div>
  )
}
}
export default App