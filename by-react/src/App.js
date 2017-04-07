import React, { Component } from 'react';
import './App.css';

class MainBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: localStorage.getItem('item'),
            text: ''
        }

        this.recordInput = this.recordInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    recordInput(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit() {
        var item_arr = JSON.parse(this.state.item) || [];

        item_arr.push(this.state.text);
        localStorage.setItem('item', JSON.stringify(item_arr));

        this.setState({
            item: localStorage.getItem('item')
        })
    }

    // TODO done(){}

    render() {
        return (
            <div className="main">
                <h1>TODOLIST</h1>
                <div className="input-box">
                    <input type="text" placeholder="shuru" onChange={this.recordInput} />
                    <button className="submit" onClick={this.handleSubmit}>提交</button>
                </div>
                <div className="list">
                    <TodoList item={this.state.item}/>
                </div>
            </div>
        );
    }
}

class TodoList extends Component {
    render() {
        var self = this,
            items = JSON.parse(self.props.item) || [];

        console.log(items);
        
        return (
            <ul className="item">
                {
                    items.map(function(text, index){
                        return(<li key={index}>{text}</li>)
                    }) 
                }
            </ul>
        )
    }
}

class App extends Component {
    render() {
        return (
            <MainBody />
        );
    }
}

export default App;
