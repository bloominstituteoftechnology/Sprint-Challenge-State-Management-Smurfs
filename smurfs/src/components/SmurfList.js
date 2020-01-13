import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/postActions';

class SmurfList extends Component {
    componentWillMount() {
        this.props.fetchSmurfs();
    }
    render() {
        const arrItems = this.props.posts.map(smurf => (
            <div key={smurf.id}>
                <h3>{smurf.name}</h3>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
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
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);