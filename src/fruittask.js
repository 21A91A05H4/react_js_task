import React from 'react'
import Fruitslist from './fruitslist'
class FruitTask extends React.Component {
    state = {
    names: [
    'Banana',
    'Apple',
    'Orange',
    'Mango',
    'Pineapple', 
    'Watermelon',
    ],
    searchFruit: ""
    }
    editSearchTerm = (e) => {
    this.setState({searchFruit: e.target.value})
    }
    dynamicSearch =() => {
    return this.state.names.filter(name=> name.toLowerCase().includes (this.state.searchFruit.toLowerCase()))
    }
    render() {
    return (
    <div style={{textAlign: 'center', paddingTop: '30vh'}}>
    <label>Search:</label>
    <input type='text' value = {this.state.searchFruit} onChange = {this.editSearchTerm}/>
    <br/><br/>
    <Fruitslist names = {this.dynamicSearch()}/>
    </div>
    );
    }
    }
    export default FruitTask;