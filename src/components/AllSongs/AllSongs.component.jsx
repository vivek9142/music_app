import { useEffect } from "react";
import { getData, getFinalData, setFinalData} from '../../redux/actionCreators/dataActionCr';
import { useDispatch,useSelector } from "react-redux";
import SongsList from '../SongsList/SongsList.component';
import { Typography } from "@material-ui/core";


const AllSongs = (props) => {
    const dispatch = useDispatch();
    const albums = useSelector(state => state.albums);
    const photos = useSelector(state => state.photos);
    const finalData = useSelector(state => state.finalData);


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

    
    return (
        <>
        <Typography variant='h4'>All Songs</Typography>
        <SongsList data={finalData} />
        </>
    )
};

export default AllSongs;

