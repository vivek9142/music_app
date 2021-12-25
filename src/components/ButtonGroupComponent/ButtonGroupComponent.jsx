import { Button,ButtonGroup,makeStyles } from "@material-ui/core"

const ButtonGroupComponent = () => {
    const classes = useStyles();
    
    return (
        <ButtonGroup className={classes.button_grp} variant="contained" color="primary" aria-label="contained primary button group">
            <Button className={classes.button}>All Songs</Button>
            <Button className={classes.button}>Playist</Button>
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
