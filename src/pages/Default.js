import React, { Component } from 'react'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
export class Default extends Component {
  render() {
    return (
      <Header title="404">
        <h2 className="text-light text-uppercase">You are the wrong page </h2>
        <Link to='/' className="text-light text-uppercase btn btn-secondary btn-lg-mt-3">Return Home</Link>
      </Header>
    )
  }
}

export default Default
