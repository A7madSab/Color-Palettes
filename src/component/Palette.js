import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import ColorBox from "./ColorBox"

const styles = makeStyles({
    root: {
        height: "100vh",
    },
    palleteColors: {
        height: "90%"
    }
})

const Palette = ({ id, emoji, paletteName, colors, level, format }) => {
    const classes = styles()
    console.log(colors)
    return (
        <div className={classes.root}>
            {/* <h1>paletteName: {paletteName}</h1>
            <h1>id: {id}</h1>
            <h1>emoji: {emoji}</h1> */}

            <Grid className={classes.palleteColors} container direction="row">
                {colors[level].map(({ name, hex, rgb, rgba }, key) => {
                    return (
                        <ColorBox
                            key={key}
                            name={name}
                            color={format === "hex"
                                ? hex
                                : format === "rgb"
                                    ? rgb
                                    : rgba
                            }
                        />
                    )
                })}
            </Grid>
        </div>
    )
}

export default Palette
