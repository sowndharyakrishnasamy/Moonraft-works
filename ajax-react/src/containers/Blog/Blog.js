import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts';
import { Route ,NavLink, Switch} from 'react-router-dom';
import './Blog.css';
import NewPost from './NewPost/NewPost';


class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header >
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname : '/new-post',
                                hash : '#submit',
                                search : '?quick-submit=true'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
              {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
              <Switch>
              <Route path="/new-post"  component={NewPost}/>
               <Route path="/"  component={Posts}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;