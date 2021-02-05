import React, { Component } from 'react';

// UI styling
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <ToolBar className="nav-container">
                    HELLO WORLD, MADE EASY.
                </ToolBar>
            </AppBar>
        )
    }
}

export default Navbar
