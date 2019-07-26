import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchSmurfs } from '../store/actions'

import Smurfs from './Smurfs'

import "./App.css";

class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.fetching && <h3>fetching data...</h3>}  
        {this.props.error && <h3>{this.props.error}</h3>}  
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapSTP: ', state)
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(App);
