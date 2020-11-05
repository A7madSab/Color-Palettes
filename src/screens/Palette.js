import { useState } from "react"
import { useSnackbar } from "notistack"

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import ColorBox from "../component/ColorBox"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

const styles = makeStyles({
    palleteColors: {
        height: "90%"
    }
})

const Palette = ({ id, emoji, paletteName, colors }) => {
    const classes = styles()

    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState("hex")
    const { enqueueSnackbar } = useSnackbar()

    const changeLevel = (event, newValue) => setLevel(newValue)
    const changeFormat = event => {
        setFormat(event.target.value)
        enqueueSnackbar("You Changed the format.", { variant: 'success' })
    }

    return (
        <>
            <Navbar format={format} changeFormat={changeFormat} level={level} changeLevel={changeLevel} />
            <div className={classes.root}>
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
            <Footer id={id} emoji={emoji} paletteName={paletteName} />
        </>
    )
}

export default Palette
