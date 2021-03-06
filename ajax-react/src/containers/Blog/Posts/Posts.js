import React ,{Component} from 'react';
import Post from '../../../components/Post/Post';
import './Posts.css';
import axios from '../../../axios';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
class Posts extends Component {
    state={
        posts:[]
    }
    componentDidMount(){
        console.log(this.props);
        axios.get('/posts')
        .then(response =>{
            const posts =response.data.splice(0,4);
            const updatedPosts = posts.map(post =>{
                return {
                    ...post,
                    author :'Max'
                }
            })
            this.setState({posts: updatedPosts})
           // console.log(response);
        })
        .catch(error =>
        {
            console.log(error);
            //this.setState({error:true})
        });
    }
    postSelectedHandler = (id) =>{
        // this.setState({
        //     selectedPostId :id
        // })
        this.props.history.push('/' + id);
    }
    render(){
        let posts= <p styel={{textAlign :'center'}}>SOMETHING WENT WRONG </p>;
        if(!this.state.error){
            posts=this.state.posts.map(post =>{
                return (
                //<Link to={'/'+post.id} key={post.id}>
                    <Post title={post.title}
                    key={post.id}
                  author={post.author}
                 clicked={() => this.postSelectedHandler(post.id)}/>
                // </Link>
            );
            })
        }
        return(
            <div>
            <section className="Posts">
            {posts}
            </section>
            <Route path="/:id" exact component ={FullPost}/>
            </div>
        )

    }
}
export default Posts;