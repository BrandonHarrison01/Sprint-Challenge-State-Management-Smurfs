import React from 'react'
import { connect } from 'react-redux'

import { addSmurf } from '../store/actions'

class AddSmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
    }

    changeHandler = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    addNewSmurf = e => {
        e.preventDefault();
        this.props.addSmurf(this.state)
    }

    render() {
        return(
            <form onSubmit={this.addNewSmurf}>
                <input 
                    type='text'
                    name='name' 
                    value={this.state.name}
                    onChange={this.changeHandler}
                    placeholder='Smurf Name' 
                />
                <input 
                    type='text'
                    name='age' 
                    value={this.state.age}
                    onChange={this.changeHandler}
                    placeholder='Smurf Age' 
                />
                <input 
                    type='text'
                    name='height' 
                    value={this.state.height}
                    onChange={this.changeHandler}
                    placeholder='Smurf Height' 
                />
                <button>Add Smurf!</button>
            </form>
        )
    }
}

const mapStateToProps = state => (
    console.log('form mstp', state)
)

export default connect(
    mapStateToProps,
    { addSmurf }
)(AddSmurfForm)