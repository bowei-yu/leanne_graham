import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// UI styling
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';


class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <ToolBar className="nav-container">
                    <Button color="inherit" component={Link} to="/">Home</Button>
                </ToolBar>
            </AppBar>
        )
    }
}

export default Navbar
