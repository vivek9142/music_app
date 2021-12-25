import { useEffect,useState } from "react";
import { getData, getFinalData, setFinalData} from '../../redux/actionCreators/dataActionCr';
import { useDispatch,useSelector } from "react-redux";
import SongsList from '../SongsList/SongsList.component';
import { Typography,makeStyles } from "@material-ui/core";
import FormComponent from "../Form/Form.component";

const AllSongs = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const albums = useSelector(state => state.data.albums);
    const photos = useSelector(state => state.data.photos);
    const finalData = useSelector(state => state.data.finalData);

    const [search,setSearch] = useState('');

    useEffect(()=> {
        const getData = async() => {
            if(!albums.length || !photos.length)
               { console.log(albums.length);
                await dispatch(
                    getFinalData()
                    ); }
                    if(albums.length>0 && finalData.length===0){
                        console.log('he');
                        dispatch(setFinalData(albums,photos));
                    }
        }

        getData();
    },[getData,photos]);

    const handleFormChange = (val) => {
        setSearch(val);   
    }
    return (
        <>
        <FormComponent className={classes.form_component} searchForm onChange={handleFormChange}/>
        <Typography variant='h4' className={classes.song_title}>All Songs</Typography>
        <SongsList data={finalData} search={search}/>
        </>
    )
};

export default AllSongs;

const useStyles = makeStyles(({
    form_component:{
        margin:'3rem'
    },
    song_title:{
        margin: '2rem'
    }
}));
