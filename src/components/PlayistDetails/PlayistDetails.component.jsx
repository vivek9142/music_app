import { useState } from 'react';
import { Button,Typography } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import SongsList from '../SongsList/SongsList.component';
import FormComponent from '../Form/Form.component';

const PlayistDetails = (props) => {
    const dispatch = useDispatch();
    const [search,setSearch] = useState('');
    const [addSongComp,showAddSongComp] = useState(false);
    const finalData = useSelector(state => state.data.finalData);
    
    const handleFormChange = (val) => {
        setSearch(val);   
    }

    return (
        <>
        <div className="playist_container">
            <Typography variant='h3'>{props.data.name}</Typography>
            {
                addSongComp ? 
                (<>
                <FormComponent searchForm onChange={handleFormChange}/>
                <SongsList addtoList data={finalData} search={search} playistId={props.data.id}/>
                </>) 
                :(
                <div className="playist__container__body">
                    <div className="playist__container__body_buttons">
                        <Button>Shuffle Play</Button>
                        <Button onClick={()=> showAddSongComp(prevState=> !prevState.addSongComp)}>Add Song</Button>
                    </div>
                
                    <div className="songs_container">
                        {props.data.songs.length>0 ?
                        (<SongsList data={props.data.songs} playistId={props.data.id}/>)
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