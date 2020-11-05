import { jssPreset, StylesProvider, ThemeProvider } from "@material-ui/core"
import { create } from "jss"
import rtl from "jss-rtl"
import useSettings from "./hooks/useSettings"
import seedColor from "./seedColor"
import generatePalette from "./utils/ColorHelper"
import { createTheme } from "./theme"
import { Route, Switch } from "react-router-dom"
import Palette from "./screens/Palette"
import PaletteList from "./screens/PaletteList"

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

function RTL(props) {
  return (
    <StylesProvider jss={jss}>
      {props.children}
    </StylesProvider>
  );
}

const App = () => {
  const { settings } = useSettings()

  const findPalette = id => seedColor.find(pallete => pallete.id === id)

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme
  })

  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <PaletteList palletes={seedColor} />}
            />
            <Route
              exact
              path="/palette/:id"
              render={routeProps => <Palette {...generatePalette(findPalette(routeProps.match.params.id))} />}
            />
          </Switch>
        </StylesProvider>
      </ThemeProvider>
    </RTL>
  )
}

export default App