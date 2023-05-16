import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">

  </div>
  <div className="navbar-center">
    <Link to="/" className="btn btn-primary normal-case text-xl">An Unsolved Mystrey Lovestory</Link>
  </div>
  <div className="navbar-end">

  </div>
</div>
  )
}

export default Navbar