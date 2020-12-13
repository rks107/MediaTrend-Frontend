import React, { Component } from 'react';

class Logout extends Component {
    render() {
        return (
          <form className="signup-form">
            <span className="login-signup-header">Log out</span>
            <div className="field">
              <input type="String" placeholder="Name" />
            </div>
            <div className="field">
              <input type="email" placeholder="Email" />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" />
            </div>
            <div className="field">
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="field">
                <button>Logout</button>
            </div>
          </form>
        );
    }
}

export default Logout;