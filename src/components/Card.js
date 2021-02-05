import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: var(--text-medium-emphasis);
  background-color: var(--surface-color);
  transition: transform .5s;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  text-align: center;
  width: 14rem;
  &:hover {
    color: var(--text-high-emphasis);
    transform: scale(1.05);
    background-color: var(--primary-color);
  }
  &:active {
    transform: scale(0.9);
  }
`

const Card = ({ id, name, email }) =>
  <Container>
    <img src={`https://robohash.org/${id}?size=200x200`} alt='' />
    <div>
      <h2>{name}</h2>
      <p>{email.toLowerCase()}</p>
    </div>
  </Container>

export default Card