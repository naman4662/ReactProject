import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import { SearchList } from './components/search-list/search-list.component';
import { Container} from 'react-bootstrap';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField:''
    }

    // this.handleChange = this.handleChange.bind(this);
  };

 

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monster: users }))
  }

  handleChange = e => {
    this.setState({searchField:e.target.value})
  }
  render() {
    const { monster,searchField } = this.state; // new way for below two lines
    // const monster = this.state.monster;
    // const searchField = this.state.searchField;
    const filteredMonster = monster.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()) )
    return (
      <Container>
        <div className="App">
          <h1 className="monstor-head"> Monster Rolex</h1>
        <SearchList 
          placeholder = 'search monsters'
          handleChange = {this.handleChange}
        />
        <CardList monster = {filteredMonster} />
      </div>
      </Container>
      
    );
  }
}

export default App;
