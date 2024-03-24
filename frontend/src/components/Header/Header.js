import React from 'react'
import classes from './header.module.css'
import { Link } from 'react-router-dom';

export default function Header() {
  const user = {
    name: 'Table',
  };
  const cart = {
    totalCount: 10,
  };
  const logout = () => {}
  return <header className={classes.header}>
  <div className={classes.container}>
    <Link to="/" className={classes.logo}>
      Kimomo
    </Link>
    <nav>
      <ul>
        {
          user ? (
          <ul>
            <div>
              <Link to='/profile'>{user.name}</Link>
              <Link to='/orders'>Orders</Link>
              <Link onClick={logout}>Logout</Link>
            </div>
          </ul> )
          : (<Link to='/login'>Login</Link>
        )}
        <ul>
          <Link to='/cart'>Cart {cart.totalCount > 0 && <span>{cart.totalCount}</span>}</Link>
        </ul>

      </ul>
    </nav>
  </div>
  </header>;
}
