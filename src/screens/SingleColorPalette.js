import { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import ColorBox from "../component/ColorBox"
import { gatherShades } from "../utils/ColorHelper"
import { makeStyles } from "@material-ui/core/styles"

import NavbarStatless from "../component/NavbarStatless"
import Footer from "../component/Footer"

const styles = makeStyles({
    palleteColors: {
        height: "90%"
    }
})

const SingleColorPalette = ({ colorId, colors, paletteName }) => {
    const [shades, setShades] = useState([])
    const classes = styles()

    useEffect(() => {
        const allShades = gatherShades(colors, colorId)
        setShades(allShades.slice(1))
    }, [colors, colorId])

    return (
        <>
            <NavbarStatless back={true} />
            <Grid className={classes.palleteColors} container direction="row">
                {
                    shades.map(({ name, hex }, key) => <ColorBox key={key} id={colorId} paletteId={paletteName} shades={true} name={name} color={hex} />)
                }
            </Grid>
            <Footer />
        </>
    )
}

export default SingleColorPalette
