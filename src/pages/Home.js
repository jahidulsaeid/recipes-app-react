import React, { Component } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <Header title="Amazing recipes">
        <Link to="/recipes" className="text-uppercase btn btn-secondary btn-lg mt-3">
        Search recipes
        </Link>
      </Header>

    )
  }
}

export default Home
