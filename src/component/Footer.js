import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    text: {
        paddingRight: "15px",
        paddingLeft: "15px",
    }
}))

const Footer = ({ paletteName, emoji, id }) => {
    const classes = useStyles()

    return (
        <Grid container justify="flex-end">
            <Grid item>
                <Typography className={classes.text}>{emoji} {paletteName}</Typography>
            </Grid>
        </Grid>
    )
}

export default Footer
