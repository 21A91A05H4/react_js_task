import React, { Component } from 'react'
import Name from './name'

class Fruitslist extends Component {
    render() {
        return (
            <div>
                {this.props.names.map(name => <Name name = {name}/>)}
            </div>
        )
    }
}

export default Fruitslist