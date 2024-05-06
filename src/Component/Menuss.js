import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

const Menuss = () => {
  return (
    <div>
      <h1>he;llo</h1>
    
      <ListGroup>
        <ListGroupItem>
          <Link to="/">Home</Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="/add">AddTodo</Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="/view">ViewTodo</Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default Menuss
