import React, { Component } from 'react';
import './App.css';
// import { fetchFriends, createFriend } from './actions';
import { fetchFriends} from './actions';
import { connect } from 'react-redux';
// import AddFriend from './AddFriend';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    console.log(this.props)
    return <div className="App">
      <header className="App-header">
        <h1 className="App-title"> Friend List</h1>
</header>

<div className="friend-container">
{this.props.friends.map(friend => {
return (
<div key={friend.name} className="friend-card">
<ul>
<li><span style={{ color: 'black' }}>Name:</span> {friend.name}</li>
<li><span style={{ color: 'black' }}>Age:</span> {friend.age}</li>  
<li><span style={{ color: 'black' }}>Email:</span> {friend.email}</li>
</ul>
</div>
)
})}
</div>
</div>;
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    friends: state.friends,
    error: state.error,
    pending: state.pending
  }
}

export default connect(mapStateToProps, { fetchFriends})(App);