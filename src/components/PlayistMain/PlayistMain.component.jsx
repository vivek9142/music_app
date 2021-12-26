import { useState } from "react";
import FormComponent from "../Form/Form.component";
import PlayistList from '../PlayistList/PlayistList.component';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button, makeStyles,Typography } from "@material-ui/core";
import PlayistDetails from "../PlayistDetails/PlayistDetails.component";

const PlayistMain = () => {
    const classes = useClasses();
    const [playist,setPlayist] = useState({});

    const changeHandler = (data={}) => {
        setPlayist(data);
    }

    return(
        <>
        <div className={classes.playist__container}>
        <Button className={classes.button} variant="contained" disableElevation onClick={()=> changeHandler()}><ArrowBackIcon/></Button>
        <Typography variant='h4' className={classes.title}>Playist</Typography>
        </div>

        <div className={classes.playist_body__container}>
            
            {playist && Object.keys(playist).length>0 ? 
            (
            <PlayistDetails data={playist}/>
            )
                : 
                (<>
                <div className={classes.form_container}>
                    <Typography component='p' variant='h6'>Create Playist</Typography>
                    <FormComponent className={classes.FormComponent} submitForm />
                </div>
                <PlayistList onChange={changeHandler}/>
                </>)
            }
        </div>
        </>
    )
}

export default PlayistMain;

const useClasses = makeStyles(({
    playist__container:{
        display:'flex',
        justifyContent:'center',
        gap:'2rem'
    },
    title:{
        margin:'1rem'
    },
    button:{
        margin: '1rem'
    },
    playist_body__container:{
        background: '#e7e5e5',
        padding: '1rem',
        minHeight: '18rem',
        position:'relative'
    },
    form_container:{
        background: '#d1d1d1',
        color: '#333',
        padding:' 1rem',
        borderRadius:' 1rem'
    },
    FormComponent:{
        bottom:'1rem',
        margin: '1rem -10rem'
    },
    no_playist:{
        height:'8rem'
    }
}));