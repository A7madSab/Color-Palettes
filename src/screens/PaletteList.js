import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import MiniPalette from "../component/MiniPalette"

import Navbar from "../component/NavbarStatless"

const PaletteList = ({ palletes }) => {
    return (
        <>
            <Navbar />
            <Container>
                <Grid container spacing={4}>
                    {palletes.map((palletes, key) => <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                        <MiniPalette  {...palletes} />
                    </Grid>)}
                </Grid>
            </Container>
        </>
    )
}

export default PaletteList
