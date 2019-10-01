import React, { Component } from 'react';
import axios from 'axios';

import UserData from './UserData.js';

const githubAPI= 'https://api.github.com/users/kiyanibamba';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github: [],
    };
  }

  componentDidMount() {
    axios.get(githubAPI)
    .then(res => {
    this.setState({ github: res.data})
    console.log(this.state.github.bio)
    })
  }



  // Q: Why my code doesn't consider that github is defined ? 

  render () {
    return (
    <div> 
      <UserData props={this.state.github}/>
    </div>
  )}
}