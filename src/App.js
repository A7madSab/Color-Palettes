import { useState } from "react"
import { jssPreset, StylesProvider, ThemeProvider } from "@material-ui/core"
import { useSnackbar } from "notistack"
import { create } from "jss"
import rtl from "jss-rtl"
import useSettings from "./hooks/useSettings"
import seedColor from "./seedColor"
import generatePalette from "./utils/ColorHelper"
import { createTheme } from "./theme"

import Palette from "./component/Palette"
import Navbar from "./component/Navbar"

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

function RTL(props) {
  return (
    <StylesProvider jss={jss}>
      {props.children}
    </StylesProvider>
  );
}

const App = () => {
  const [level, setLevel] = useState(500)
  const [format, setFormat] = useState("hex")
  const { settings } = useSettings()
  const { enqueueSnackbar } = useSnackbar()

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme
  })

  const changeLevel = (event, newValue) => setLevel(newValue)
  const changeFormat = event => {
    setFormat(event.target.value)
    enqueueSnackbar("You Changed the format.", { variant: 'success' })
  }

  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <Navbar format={format} changeFormat={changeFormat} level={level} changeLevel={changeLevel} />
          <Palette format={format} level={level} {...generatePalette(seedColor[4])} />
        </StylesProvider>
      </ThemeProvider>
    </RTL>
  )
}

export default App
// {
//    seedColor.map(((palette, key) => <Palette key={key} {...palette} />))
// }