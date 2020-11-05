import { useHistory } from "react-router-dom"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    root: {
        "&:hover": {
            cursor: "pointer",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }
    },
    colorContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: "200px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden",
    },
    colorBox: {
        height: "25%",
        width: "20%",
        display: "inline-block",
    }
})

const MiniPalette = ({ id, paletteName, colors, emoji }) => {
    const classes = useStyles()
    const history = useHistory()
    return (
        <Card className={classes.root} onClick={() => history.push(`/palette/${id}`)}>
            <CardContent>
                <Grid container className={classes.colorContainer}>
                    {colors.map((color, key) => (
                        <Grid key={key} item className={classes.colorBox} style={{ backgroundColor: color.color }} />
                    ))}
                </Grid>
            </CardContent>
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography color="textPrimary">{paletteName}</Typography>
                    </Grid>

                    <Grid item>
                        <span>{emoji}</span>
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )
}

export default MiniPalette
