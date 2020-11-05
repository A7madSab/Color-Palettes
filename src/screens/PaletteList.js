import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

import Navbar from "../component/NavbarStatless"
import MiniPalette from "../component/MiniPalette"

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(4)
    }
}))

const PaletteList = ({ palletes }) => {
    const classes = useStyles()
    return (
        <>
            <Navbar />
            <Container className={classes.container}>
                <Grid container spacing={4}>
                    {palletes.map((palletes, key) => <Grid key={key} item xs={12} sm={6} md={4}>
                        <MiniPalette  {...palletes} />
                    </Grid>)}
                </Grid>
            </Container>
        </>
    )
}

export default PaletteList
