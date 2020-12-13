import React, { Component } from 'react';
import {PostsList} from './';
class Home extends Component {
    render() {
        console.log("props", this.props);
        const { posts } = this.props;
        return (
            <div className="home">
                <PostsList posts={posts}/>
            </div>
        );
    }
}

export default Home;