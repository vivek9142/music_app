import { useState } from 'react';
import { Button,Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SongsList from '../SongsList/SongsList.component';
import FormComponent from '../Form/Form.component';

const PlayistDetails = ({data,...props}) => {
    const [search,setSearch] = useState('');
    const [addSongComp,showAddSongComp] = useState(false);
    const finalData = useSelector(state => state.data.finalData);
    const [origData,setOrigData] = useState(data.songs);

    const handleFormChange = (val) => {
        setSearch(val);   
    }
    const shuffleHandler = () => {
        for(let i=data.songs.length-1;i>0;i--){
            let j = Math.floor(Math.random()*(i+1));
            [data.songs[i],data.songs[j]] = [data.songs[j],data.songs[i]];
        }
        console.log(data.songs);
        setOrigData([...data.songs]);
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
                        <Button onClick={shuffleHandler}>Shuffle Play</Button>
                        <Button onClick={()=> showAddSongComp(prevState=> !prevState.addSongComp)}>Add Song</Button>
                    </div>
                
                    <div className="songs_container">
                        {data.songs.length>0 ?
                        (<SongsList data={origData} playistId={data.id}/>)
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