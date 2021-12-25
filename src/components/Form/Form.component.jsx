import { useState } from 'react';
import {setSearchData} from '../../redux/actionCreators/dataActionCr';
import {useDispatch} from 'react-redux';
import {TextField,makeStyles} from '@material-ui/core';

const FormComponent = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
  const [search,setSearch] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(setSearchData(search));
  }
    return(
        <form onSubmit={submitHandler}>
          <TextField className={classes.input} label='Song name' variant='outlined' type="text" 
          onChange={(ev)=> setSearch(ev.target.value)} />
      </form>
    )
}

const useStyles = makeStyles(({
    form:{
        display: 'block',
        padding: '7rem 5rem',
        background: '#e8e6e6',
        margin: '3rem 0'
    },
    button:{
        padding:'0.91rem 2rem',
        borderRadius: '0 0.5rem 0.5rem 0'
    },
    input:{
        background: '#f8f8f8',
        width:'40%'
    }
}));

export default FormComponent;
