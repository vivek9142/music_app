import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {TextField,Button,makeStyles} from '@material-ui/core';
import {createPlayist} from '../../redux/actionCreators/playistActionCr';

const FormComponent = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [playist,setPlayist] = useState('');

    const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createPlayist(playist));
    }
    if(props.searchForm)
    return(
          <TextField className={classes.input} label='Song name' variant='outlined' type="text" 
          onChange={(ev)=> { props.onChange(ev.target.value);}} />
    )

    if(props.submitForm)
    return (
        <form onSubmit={submitHandler} className={classes.form}>
          <TextField className={classes.input} label='Playist Name' variant='outlined' type="text" 
          onChange={(ev)=> setPlayist(ev.target.value)} />

          <Button className={classes.button} color='primary' variant='contained' size='large' type='submit' disableElevation>
              Submit
            </Button>
      </form>
    )
}

const useStyles = makeStyles(({
    input:{
        background: '#f8f8f8',
        width:'40%'
    },
    button:{
        padding:'0.91rem 2rem',
        borderRadius: '0 0.5rem 0.5rem 0'
    }
}));

export default FormComponent;
