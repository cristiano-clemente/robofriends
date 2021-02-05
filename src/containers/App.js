import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchField, requestRobots } from '../actions'
import styled, { createGlobalStyle } from 'styled-components'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: rgba(20, 20, 20);
    --surface-color: rgba(50, 50, 50);
    --overlay-color: rgba(80, 80, 80);
    --primary-color: #BB86FC;
    --secondary-color: #03DAC5;
    --text-high-emphasis: rgba(255, 255, 255, 0.87);
    --text-medium-emphasis: rgba(255, 255, 255, 0.60);
  }

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      background-color: var(--background-color);
      color: var(--text-medium-emphasis);
  }

  /* hide scrollbar */
  *::-webkit-scrollbar {
    display: none;  /* chrome, safari and opera */
  }

  * {
    -ms-overflow-style: none;  /* ie and edge */
    scrollbar-width: none;  /* firefox */
  }
`

const Header = styled.div`
    margin: 1rem 0 0.5rem 0;
    background-color: var(--surface-color);
    padding: 1rem;
    text-align: center;
    `

const Heading = styled.h1`
    margin: 0;
    font-size: 6vw;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
    @media only screen and (max-width: 600px) {
        font-size: 15vw;
    }
  `

const CardContainer = styled.div`
    margin-bottom: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `

const App = () => {
  const dispatch = useDispatch()
  const { searchField } = useSelector(state => state.searchRobots)
  const { robots, isPending, error } = useSelector(state => state.requestRobots)

  const onSearchChange = event =>
    dispatch(setSearchField(event.target.value))

  const onRequestRobots = event =>
    dispatch(requestRobots())

  useEffect(
    () => onRequestRobots(),
    []
  )

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return (
    <>
      <GlobalStyle />
      <Header>
        <Heading>RoboFriends</Heading>
        <SearchBox searchChange={onSearchChange} />
      </Header>
      <CardContainer>
        {isPending &&
          <h1> Loading... </h1>
        }
        {!error &&
          <CardList robots={filteredRobots} />
        }
      </CardContainer>
    </>
  )
}

export default App