import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';

const Header = styled.div`
    margin: 1rem 0 0.5rem 0;
    background-color: var(--surface-color);
    padding: 1rem;
    text-align: center;
    `;

const Heading = styled.h1`
    margin: 0;
    font-size: 6vw;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
    @media only screen and (max-width: 600px) {
        font-size: 15vw;
    }
  `;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

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
    //window.scrollTo(0, 0);            // scroll to the top of the page
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <GlobalStyle />
      <Header>
        <Heading>RoboFriends</Heading>
        <SearchBox searchChange={onSearchChange} />
      </Header>
      <CardContainer>
        <CardList robots={filteredRobots} />
      </CardContainer>
    </>
  )
}

export default App;