import React from 'react';
import Form from './components/FriendForm'
import './App.css';
import axios from 'axios'
import Friend from './components/Friend'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  deleteHandler = (id) => {
    return() => {
      axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({friends: res.data})
      })
      .catch(err => console.log(err))
    }
  }

  addFriend = (e,friend) => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/friends', friend)
    .then(res => {
      this.setState({
        friends: res.data
      })
      .catch(err => {
        console.log(err)
      })
    })
  }

  render() {
    return (
      <div>
        <div className='friend-form' />
        <Form friends={this.state.friends} />
        {this.state.friends.map(friend => (
          <Friend friend={friend} />
        ))}
      </div>
    )
  }
}
export default App