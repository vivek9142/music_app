import {makeStyles,Card,CardContent,Typography,CardMedia,CardActions,Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {addSongsToPlayist,deleteSongFromPlayist} from '../../redux/actionCreators/playistActionCr';

const SongsList = ({data,search='',...props}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const newData = data.filter(item => item.title.includes(search));

    const addSong = (playistId,item) => {
        dispatch(addSongsToPlayist(playistId,item))
    }
    const deleteSong = (playistId,songId) =>{
        dispatch(deleteSongFromPlayist(playistId,songId));
    }
    return (
        <>
        {
        newData.map(item => (
        <Card key={item.id} className={classes.card}>
            <div className={classes.card_action_area}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={item.thumbnailUrl}
                    title="Contemplative Reptile"
                    className={classes.card_img}
                    />
                <CardContent className={classes.card_content}>
                        <Typography gutterBottom variant='h5' component='h2'>
                                {item.title}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' content='p'>
                                {item.albumTitle}
                        </Typography>
                </CardContent>
                <CardActions>
                {props.addtoList ? (<Button className={classes.button} size='small' variant='contained' color='primary' onClick={() => addSong(props.playistId,item)}>Add</Button>):(<></>)}
                {props.delete ? (<Button className={classes.button} size='small' variant='contained' color='primary' onClick={() => deleteSong(props.playistId,item.id)}>Delete</Button>):(<></>)}
            </CardActions>
            </div>
            
        </Card>)
        )}
        </>
        )
}
const useStyles = makeStyles(({
    card:{
        margin:'1.5rem 5rem'
    },
    card_action_area:{
        textAlign:'start',
        display:'flex',
        justifyContent:'flex-start'
    },
    card_img:{
        height:'100%',
        width:'9rem'
    },
    card_content:{
        flexBasis:'70%'
    },
    button:{
        marginRight: '1rem'
    }
}));

export default SongsList;