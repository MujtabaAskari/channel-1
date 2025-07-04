
import React, { Component } from 'react';
import { SearchBox } from './search';
import { CardList } from './CardList';
import './App.css';
import './Cardlist.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    onSearchChange = event => {
        this.setState({ searchField: event.target.value });
    };

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className='App'>
                <h1 className='bigelow-rules-regular'> Monsters Rolodex</h1>
                <SearchBox onSearchChange={this.onSearchChange} />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
