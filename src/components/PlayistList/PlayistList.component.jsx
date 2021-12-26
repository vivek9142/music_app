import { useSelector } from "react-redux";
import {makeStyles,Card,CardActionArea,CardContent,Typography,CardMedia,CardActions,Button} from '@material-ui/core';

const PlayistList = (props) => {
    const classes = useStyles();
    const playists = useSelector(state => state.playist.playist);

    return(
        <>
        {
        playists.map(item => (
        <Card onClick={()=> props.onChange(item)} key={item.id} className={classes.card}>
            <CardActionArea className={classes.card_action_area}>
                <CardContent className={classes.card_content}>
                        <Typography gutterBottom variant='h5' component='h2'>
                                {item.name}
                        </Typography>
                </CardContent>
                <CardActions>
                        <Typography variant='body2' color='textSecondary' content='p'>
                            createdAt:{item.createdDate}
                        </Typography>
                    
            </CardActions>
            </CardActionArea>
            
        </Card>)
        )}
        </>
    )
}

export default PlayistList;

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
        flexBasis:'50%'
    }
}));