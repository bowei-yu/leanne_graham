import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Image from '../assets/image.jpg';
// import PhoneIcon from '../assets/icon-24-phone.svg';
import TagIcon from '../assets/category.png';
import LocationIcon from '../assets/icon-24-shop.svg'

// UI
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';
import EmailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


const styles = (theme) => ({
    paper: {
        maxWidth: 345,
    },
    profile: {
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative'
        },
        '& .profile-image': {
            width: 345,
            objectFit: 'cover',
            maxWidth: '100%',
        },
        '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
                verticalAlign: 'middle'
            },
            '& a': {
                color: theme.palette.primary.main
            }
        },
        '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
        },
        '& .tag-icon': {
            width: 25,
            height: 25,
            verticalAlign: 'middle'
        },
        '& .shop-icon': {
            verticalAlign: 'middle'
        }
    }, 
    buttons: {
        textAlign: 'center',
        '& a': {
            margin: '20px 10px'
        }
    }
});

class Profile extends Component {

    render() {
        const {
            classes,
            user: {
                id, name, username, email, 
                address: {
                    street, suite, city, zipcode, geo
                }, phone, website, 
                company: {
                    coname, catchPhrase, bs
                }
            }
        } = this.props;

        return (
            <Card className={classes.paper}>
                <CardContent className={classes.profile}>
                    <CardMedia className="image-wrapper">
                        <img src={Image} title="profile-image" className="profile-image"/>
                    </CardMedia>
                    <hr/>
                    <div className="profile-details">
                        <Typography variant="h5">
                            {name}
                        </Typography>
                        <hr/>
                        <MuiLink component={Link} to={`users/${username}`} color="primary" variant="body1">
                            @{username}
                        </MuiLink>
                        <hr/>
                        {phone && (
                            <Fragment>
                                <PhoneIcon color="primary"/> 
                                <span>{' '}{phone.split("x")[0]}</span>
                                <hr/>
                            </Fragment>
                        )}
                        {email && (
                            <Fragment>
                                <EmailIcon color="primary"/> 
                                <span>{' '}{email}</span>
                                <hr/>
                            </Fragment>
                        )}
                        {bs && (
                            <Fragment>
                                <img src={TagIcon} alt="tag-icon" className="tag-icon"/>
                                <span>{' '}{bs}</span>
                                <hr/>
                            </Fragment>
                        )}
                        {street && suite && city && zipcode && (
                            <Fragment>
                                <img src={LocationIcon} alt="location-icon" className="shop-icon"/>
                                <span>{' '}{street}, {suite}, {city} {zipcode.split("-")[0]}</span>
                                <hr/>
                            </Fragment>
                        )}
                        {website && (
                            <Fragment>
                                <LinkIcon color="primary"/> 
                                <a href={website} target="_blank" rel="noopener noreferrer">
                                    {' '}{website}
                                </a>
                                <hr/>
                            </Fragment>
                        )}    
                    </div>
                </CardContent>
            </Card>
        )
    }
}

export default (withStyles)(styles)(Profile);
