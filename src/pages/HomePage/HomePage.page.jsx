import AllSongs from '../../components/AllSongs/AllSongs.component';
import {makeStyles,CssBaseline} from '@material-ui/core';
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar.component';
import ButtonGroupComponent from '../../components/ButtonGroupComponent/ButtonGroupComponent';
import PlayistMain from '../../components/PlayistMain/PlayistMain.component';

const HomePage = () => {
    const classes = useStyles();
    const [showComponent,setshowComponent] = useState('AllSongs');

    const handleChangeComponent = (comp) => {
        if(showComponent === comp) return;
        else setshowComponent(comp)
    }
    return(
        <>
        <NavBar/>
        <div className="homepage__container">
            <CssBaseline/>

            <div className={classes.button_group_container}>
                <ButtonGroupComponent onClick={handleChangeComponent}/>
            </div>
            

            <div className={classes.songs_container}>
                {showComponent==='AllSongs' ? (<AllSongs/>) : (<PlayistMain/>)}
            </div>

        </div>
        </>
    )
}

const useStyles = makeStyles(({
    songs_container:{
        margin: '3rem 2rem'
    },
    button_group_container:{
        margin: '2rem 0'
    }
}));

export default HomePage;