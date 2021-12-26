import { useState } from 'react';
import { Button,Typography } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import SongsList from '../SongsList/SongsList.component';
import FormComponent from '../Form/Form.component';
import { shuffleSongs } from '../../redux/actionCreators/playistActionCr';

const PlayistDetails = ({data,...props}) => {
    const dispatch = useDispatch();
    const [search,setSearch] = useState('');
    const [addSongComp,showAddSongComp] = useState(false);
    const finalData = useSelector(state => state.data.finalData);
    const playistData = useSelector(state => state.playist.playist).filter(item => item.id === data.id)[0];
    // console.log(playistData);
    const [origData,setOrigData] = useState(playistData.songs);

    const handleFormChange = (val) => {
        setSearch(val);   
    }
    const shuffleHandler = (playistId) => {
        dispatch(shuffleSongs(playistId));
    }
    return (
        <>
        <div className="playist_container">
            <Typography variant='h3'>{data.name}</Typography>
            {
                addSongComp ? 
                (<>
                <FormComponent searchForm onChange={handleFormChange}/>
                <SongsList addtoList data={finalData} search={search} playistId={data.id}/>
                </>) 
                :(
                <div className="playist__container__body">
                    <div className="playist__container__body_buttons">
                        <Button onClick={()=>shuffleHandler(data.id)}>Shuffle Play</Button>
                        <Button onClick={()=> showAddSongComp(prevState=> !prevState.addSongComp)}>Add Song</Button>
                    </div>
                
                    <div className="songs_container">
                        {data.songs.length>0 ?
                        (<SongsList data={playistData.songs} delete playistId={data.id}/>)
                        :(<Typography variant='h6' component='p'>No Songs Found</Typography >)}
                    </div>
                </div>
                )
            }
        </div>
        </>
    )
}

export default PlayistDetails;