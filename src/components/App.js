import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import {fetchPosts} from '../actions/posts'
import { PostsList, Navbar } from './';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  

  render() {
    const { posts } = this.props;

    return (
      <Router>
        <div>
          <Navbar />
          <PostsList posts={posts} />
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
