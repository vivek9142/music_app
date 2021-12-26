import { Button,ButtonGroup,makeStyles } from "@material-ui/core"

const ButtonGroupComponent = (props) => {
    const classes = useStyles();
    
    return (
        <ButtonGroup className={classes.button_grp} variant="contained" aria-label="contained primary button group">
            <Button className={classes.button}  color={props.comp === 'AllSongs'?'secondary':''} onClick={()=> props.onClick('AllSongs')}>
                All Songs
            </Button>

            <Button className={classes.button} color={props.comp === 'Playist'?'secondary':''} onClick={()=> props.onClick('Playist')}>
                Playist
            </Button>
        </ButtonGroup>
    )
}

export default ButtonGroupComponent;

const useStyles = makeStyles(({
    button_grp:{
        width:'30%'
    },
    button:{
        width:'50%'
    },
}));
