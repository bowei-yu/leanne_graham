import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

// UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        display: 'flex',
        marginBottom: 20
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }
}

class Post extends Component {
    render() {
        const { classes, post : {userid, id, title, body} } = this.props
        const userImage = "../assets/image.jpg"
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent className={classes.content}>
                        <Typography variant="h5">{title}</Typography>
                        <Typography variant="body1">{body}</Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Post);
