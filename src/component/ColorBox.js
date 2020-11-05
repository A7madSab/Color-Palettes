import { Link } from "react-router-dom"

import { useState } from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { CopyToClipboard } from "react-copy-to-clipboard"

const styles = makeStyles({
    root: {
        cursor: "pointer",
        height: "22vh"
    },
    copyBtnContinaer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "25px",
    },
    BottomText: {
        color: "black",
        fontSize: "10px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        padding: "5px",
        marign: "5px"
    },
    BottomBtn: {
        color: "black",
        fontSize: "10px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        padding: "0px",
        marign: "0px"
    },
    copyOverlay: {
        opacity: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        transition: "transform 1s ease-in-out",
        transform: "scale(0.1)",
        borderRadius: "50px"
    },
    copyOverlayShow: {
        opacity: 1,
        transform: "scale(5)",
        zIndex: 10,
        position: "absolute",
        overflow: "hidden",
    },
    textOverlayShow: {
        opacity: 1,
        zIndex: 10,
        backgroundColor: "white",
        borderRadius: "15px",
        textAlign: "center",
        padding: "25px",
        position: "absolute",
        transition: "transform 1.3s ease-in-out",
        overflow: "hidden",
    }
})

const ColorBox = ({ id, paletteId, name, color }) => {
    const classes = styles()
    const [hover, setHover] = useState(false)
    const [copied, setCopied] = useState(false)

    const handleSetCopy = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1000)
    }

    return (
        <CopyToClipboard text={color} onCopy={handleSetCopy}>
            <Grid
                item
                xs={12}
                sm={6}
                md={2}
                container
                className={classes.root}
                style={{ backgroundColor: color }}
                direction="column"
                justify="space-between"
                alignItems="center"
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
            >
                <Grid item container justify="center" alignItems="center">
                    <div
                        style={{ backgroundColor: color }}
                        className={copied
                            ? clsx(classes.copyOverlay, classes.copyOverlayShow)
                            : classes.copyOverlay}
                    />
                </Grid>

                {copied && <Grid className={classes.textOverlayShow}>
                    <Typography variant="h1">Copied!</Typography>
                    <Typography>{color}</Typography>
                </Grid>}

                <Grid item container className={classes.copyBtnContinaer}>
                    <Typography className={classes.copyText} style={{ opacity: hover ? 1 : 0, transition: "0.5s" }}>Copy</Typography>
                </Grid>

                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item>
                        <Typography className={classes.BottomText}>{name}</Typography>
                    </Grid>
                    <Grid item>
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <Button variant="text" className={classes.BottomBtn}>
                                More
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </CopyToClipboard >
    )
}

export default ColorBox

