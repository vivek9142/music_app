import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography} from '@material-ui/core/';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(({
    navContainer:{
        flexGrow:1
    },
    title:{
        flexGrow:1,
        marginRight: '10rem'
    }
}));

const NavBar = () => {
    const classes = useStyles();
    const user = useSelector(state => state.username);

    return (
        <div>
            <AppBar position='static' className={classes.navContainer}>
                <Toolbar>
                    <Typography variant='h5'>Music App</Typography>
                    {user ?(<Typography variant='h6' className={classes.title}>{`Hello ${user}`}</Typography>):(<></>)}
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;