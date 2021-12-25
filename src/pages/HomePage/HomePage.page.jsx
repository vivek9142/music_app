import AllSongs from '../../components/AllSongs/AllSongs.component';
import {makeStyles,CssBaseline} from '@material-ui/core';
import FormComponent from '../../components/Form/Form.component';
import NavBar from '../../components/NavBar/NavBar.component';
import ButtonGroupComponent from '../../components/ButtonGroupComponent/ButtonGroupComponent';

const HomePage = () => {
    const classes = useStyles();
    
    return(
        <>
        <NavBar/>
        <div className="homepage__container">
            <CssBaseline/>

            <div className={classes.button_group_container}>
                <ButtonGroupComponent/>
            </div>

            {/* <div className=''> */}
            <FormComponent />
            {/* </div> */}
            

            <div className={classes.songs_container}>
                <AllSongs/>
            </div>

        </div>
        </>
    )
}

const useStyles = makeStyles(({
    songs_container:{
        margin: '1rem 2rem'
    },
    button_group_container:{
        margin: '2rem 0'
    }
}));

export default HomePage;