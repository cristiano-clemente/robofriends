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
    window.scrollTo(0, 0);              // scroll to the top of the page
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className='tc'>
      <div style={{ height: '187px', position: 'fixed', top: '0', width: '100%', zIndex: '2', backgroundColor: 'rgb(0,128,128)' }}>
        <h1 className='f1' style={{ color: 'rgb(7, 27, 82)' }}>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
      </div>
      <div style={{ marginTop: '187px', zIndex: '1', backgroundColor: 'rgb(7, 27, 82)' }}>
        <CardList robots={filteredRobots} />
      </div>
    </div>
  )
}

export default App;