import { Link } from "react-router-dom"

import Grid from "@material-ui/core/Grid"

const PaletteList = ({ palletes }) => {
    console.log(palletes)
    return (
        <div>
            <Grid container>
                {palletes.map(({ id, paletteName, emoji, colors }, key) => {
                    return (
                        <Grid key={key} item xs={12}>
                            <Link to={`/palette/${id}`}>
                                <h1>{paletteName}</h1>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default PaletteList
