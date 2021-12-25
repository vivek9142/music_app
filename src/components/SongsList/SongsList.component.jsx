import {makeStyles,Card,CardActionArea,CardContent,Typography,CardMedia,CardActions,Button} from '@material-ui/core';

const SongsList = ({data,...props}) => {
    const classes = useStyles();
    
    return (
        <>
        {
        data.map(item => (
        <Card key={item.id} className={classes.card}>
            <CardActionArea className={classes.card_action_area}>
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
                {props.addtoList ? (<Button size='small' color='primary'>Add to List</Button>):(<></>)}
                {props.delete ? (<Button size='small' color='primary'>Delete</Button>):(<></>)}
            </CardActions>
            </CardActionArea>
            
        </Card>)
        )}
        </>
        )
}
const useStyles = makeStyles(({
    card:{
        marginBottom:'1rem'
    },
    card_action_area:{
        textAlign:'start',
        display:'flex',
        justifyContent:'flex-start'
    },
    card_img:{
        height:'6rem',
        width:'9rem'
    },
    card_content:{
        flexBasis:'70%'
    }
}));

export default SongsList;