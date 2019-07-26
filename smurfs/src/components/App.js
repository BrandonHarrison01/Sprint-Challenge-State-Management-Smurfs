import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchSmurfs } from '../store/actions'

import "./App.css";

class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapSTP: ', state)
}

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(App);
