import React, { Component } from 'react';
// import { connect } from 'react-redux';


//NEED TO FLESH THIS..DON'T know IF I WANT IT HERE

class AddFriend extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    handleFriendInput = e => {
        // e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        });
    };

   

    render() {
return (

)
}
}

export default AddFriend;