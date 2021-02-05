import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Post from '../components/Post';
import Profile from '../components/Profile';
import CircularProgress from '@material-ui/core/CircularProgress';

class home extends Component {
    state = {
        posts: null,
        users: null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users?id=1')
        .then(res => {
            this.setState({
                users: res.data
            })
        })
        .catch(err => console.log(err));

        axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(res => {
            this.setState({
                posts: res.data
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        
        let usersMarkup = this.state.users ? (
            this.state.users.map(user => <Profile key={user.id} user={user}/>)
        ) : <CircularProgress/>

        let postsMarkup = this.state.posts ? (
            this.state.posts.map(post => <Post key={post.id} post={post}/>)
        ) : <CircularProgress/>

        return (
            <Grid container spacing={2}>
                <Grid item sm={4} xs={12}>
                    {usersMarkup}
                </Grid>
                <Grid item sm={8} xs={12}>
                    {postsMarkup}
                </Grid>
            </Grid>
        );
    }
}

export default home;
