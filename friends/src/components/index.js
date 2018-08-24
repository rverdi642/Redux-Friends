import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../actions';

import { Button } from 'reactstrap';
import './app.css';

class App extends Component {

  componentDidMount() {
    this.props.fetch('http://localhost:5000/api/friends');
  }

  render() {
    switch (this.props.appState) {
      case "fetching":
        return (
          // <div >
          //     
          // </div>
        );

      case "error":
        return (
          <div >
            {this.props.error.message}
            <Button onClick={() => this.props.fetch('http://localhost:5000/api/friends')} >Reload</Button>
          </div>
        );
default:
  return (
    <div />
  )
}
  }
}


const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    appState: state.appState,
    error: state.error,
 
  }
}

export default connect(mapStateToProps, {

  fetch
})(App);
