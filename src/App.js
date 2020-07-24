// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

import Loading from './components/loading';
import LogIn from './components/login';



class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    }
  }
  componentDidMount() {
    setTimeout(a => {
      this.setState({ loading: false })
    }, 500)
  }
  render() {
    if (this.state.loading === true) {
      return (
        <div className="App ">
          <Loading />
        </div>
      );
    }
    else {
      return (
        <div className="App" >
          <LogIn />
          {/* <SignUp /> */}
        </div>
      )
    }

  }

}

export default App;
