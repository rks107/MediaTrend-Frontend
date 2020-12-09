import React from 'react';

function Navbar(props) {
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img
              src="https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/130279285_112327020722464_7241484572999383910_n.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=s1DiakUs5CUAX8v8MOK&_nc_ht=scontent-del1-1.xx&oh=1e44b9385c253bcd1c907c392738bd24&oe=5FF6266E"
              alt="logo"
            />
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://image.flaticon.com/icons/svg/483/483356.svg"
              alt="search-icon"
            />
            <input placeholder="Search" />

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
                id="user-dp"
              />
              <span>John Doe</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Log in</li>
                <li>Log out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;