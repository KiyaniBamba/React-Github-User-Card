import React, { useEffect, Component } from 'react';

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
    })
  }


  return () {
    <div>Hello, I am Foo Component</div>;
  }
}