import SongsList from '../SongsList/SongsList.component';

const PlayistDetails = (props) => {
    console.log(props);
    return (
        <>
        <SongsList data={props.data.songs}/>
        </>
    )
}

export default PlayistDetails;