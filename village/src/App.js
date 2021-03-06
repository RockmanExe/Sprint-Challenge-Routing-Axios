import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  handleData= data => this.setState({smurfs:data});

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({smurfs:response.data})
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Route exact path ='/' component ={Header} />
        <SmurfForm smurfs={this.state.smurfs}/>
        <Smurfs 
          smurfs={this.state.smurfs}
          handleData={this.handleData}
        />
        {/* <Route exact path='/thevillage' component ={Smurfs}/> */}
        
      </div>
    );
  }
}

export default App;
