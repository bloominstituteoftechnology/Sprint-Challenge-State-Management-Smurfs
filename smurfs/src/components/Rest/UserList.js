import React from 'react';
import { connect} from 'react-redux';
import {fetchPosts} from '../../actions';

const UserList = props => {
    console.log(props);
    const getPosts = e => {
        e.preventDefault();
        props.fetchPosts();
    }
    
    
    const postItems = props.posts.map(post =>  (
       
          <div className="list-item" key={post.length}>
              <span> NAME: {post.name} AGE: {post.age} HEIGHT: {post.height}   <button>Delete</button></span> 
        </div>
      )) 

    return   (
        <div className="list-container">
            <button onClick={getPosts}>FETCH POSTS</button>
            
            <div className="list">
                {postItems}  

            </div> 
        </div>
    )
        
            }



const mapStateToProps = state => {
    console.log(state);
    return {
        error: state.error,
        isFetching: state.isFetching,
        posts: state.posts
    }
}     
     
    
        
export default connect(mapStateToProps, {fetchPosts})(UserList);