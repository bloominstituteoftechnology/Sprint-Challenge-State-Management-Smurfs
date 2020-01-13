import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/postActions';

class SmurfList extends Component {
    componentWillMount() {
        this.props.fetchSmurfs();
    }
    render() {
        const arrItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.name}</h3>
                <p>{post.age}</p>
                <p>{post.height}</p>
            </div>
        ))
        return (
            <div>
                <hi>Smurf List</hi>
                {arrItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);