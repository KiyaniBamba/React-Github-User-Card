import React, { Component } from 'react';
import axios from 'axios';

import UsersFollowers from './UsersFollowers';
import UserData from './UserData.js';

const githubApiData= 'https://api.github.com/users/kiyanibamba';
const githubApiFollowers='https://api.github.com/users/kiyanibamba/followers';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github: [],
      githubFollowers: [],
    };
  }

  componentDidMount() {
    Promise.all([
      axios.get(githubApiData),
      axios.get(githubApiFollowers)
    ])
    .then(axios.spread((res1, res2) => {
    this.setState({ 
      github: res1.data, 
      githubFollowers: res2.data})
    // console.log(this.state.github.bio)
      // console.log(this.state.githubFollowers)
    }))};

  // Q: Why my code doesn't consider that github is defined ? 

  render () {
    return (
    <div> 
      <UserData props={this.state.github}/>
      <UsersFollowers props={this.state.githubFollowers}/>
    </div>
  )}
}