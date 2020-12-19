import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import 'tachyons';
import './App.css'

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { setRobots(users) });
  });

  const onSearchChange = (event) => {
    setSearchField(event.target.value); // update searchField
    //window.scrollTo(0, 0);              // scroll to the top of the page
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className='tc'>
      <div style={{ margin: '1rem 0 0.5rem 0', backgroundColor: 'var(--surface-color)', padding: '15px' }}>
        <h1 style={{ margin: '0', paddingBottom: '15px', fontSize: '60px', color: 'var(--primary-color)' }}>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
      </div>
      <div>
        <CardList robots={filteredRobots} />
      </div>
    </div >
  )
}

export default App;