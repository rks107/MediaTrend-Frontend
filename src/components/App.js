import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {fetchPosts} from '../actions/posts'
import { Navbar, Home, Page404, Login, Signup } from './';
// import * as jwtDecode from "jwt-decode";
import jwt_decode from 'jwt-decode';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem('token');

    if(token){
      const user = jwt_decode(token);
      console.log('USER', user);
    }
  }
  

  render() {
    const { posts } = this.props;

    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />

            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
