import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Post from '../components/Post';
import Profile from '../components/Profile';

import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class home extends Component {
    state = {
        posts: null,
        users: null,
        profile: null,
        userId: 1,
        username: "Leanne Graham"
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.setState({
                users: res.data
            })
        })
        .catch(err => console.log(err));

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                posts: res.data
            })
        })
        .catch(err => console.log(err));
    }

    onUserChange = (event, values) => {
        this.setState({
          profile: values,
          userId: values.id,
          username: values.name
        }, () => {});
    }

    render() {
        
        let usersMarkup = this.state.users 
        ? (this.state.profile 
            ? <Profile key={this.state.userId} user={this.state.profile}/>
            : <Profile key={this.state.userId} user={this.state.users[0]}/>)
        : <CircularProgress/>

        let postsMarkup = this.state.posts 
        ? (this.state.posts
            .filter(post => post.userId == this.state.userId)
            .map(post => <Post key={post.id} post={post}/>)
        ) : <CircularProgress/>

        return (
            <Fragment>
                <Autocomplete
                id="auto-complete"
                options={this.state.users}
                filterSelectedOptions
                getOptionLabel={(option) => option.name}
                onChange={this.onUserChange}
                style={{ width: 'fit', marginBottom: 20}}
                renderInput={(params) => <TextField {...params} label="Switch user by name..." variant="outlined" />}
                />
            <Grid container spacing={2}>
                <Grid item sm={4} xs={12}>
                    {usersMarkup}
                </Grid>
                <Grid item sm={8} xs={12}>
                    <Paper>
                        <Typography variant="subtitle1" color="textSecondary" style={{ width: 'fit', marginBottom: 20, padding: 20}}>
                            {this.state.username} has {postsMarkup.length} posts.
                        </Typography>
                    </Paper>
                    {postsMarkup}
                </Grid>
            </Grid>
            </Fragment>
        );
    }
}

export default home;
