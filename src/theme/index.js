import _ from "lodash"
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { THEMES } from "./constants"
import { softShadows, strongShadows } from "./shadows"
import typography from "./typography"

const baseOptions = {
  direction: "ltr",
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden"
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)"
      }
    }
  }
}

const themesOptions = [{
  name: THEMES.LIGHT,
  overrides: {
    MuiInputBase: {
      input: {
        "&::placeholder": {
          opacity: 1,
          color: colors.blueGrey[600]
        }
      }
    }
  },
  palette: {
    type: "light",
    action: {
      active: "#fff3e0"
    },
    background: {
      default: "#ffcc80",
      dark: "#ffcc80",
      paper: "#ffcc80"
    },
    primary: {
      main: "#ff9800"
    },
    secondary: {
      main: "#e65100"
    },
    text: {
      primary: "#000",
      secondary: "#000"
    }
  },
  shadows: softShadows
}, {
  name: THEMES.ONE_DARK,
  palette: {
    type: "dark",
    action: {
      active: "rgba(255, 255, 255, 0.54)",
      hover: "rgba(255, 255, 255, 0.04)",
      selected: "rgba(255, 255, 255, 0.08)",
      disabled: "rgba(255, 255, 255, 0.26)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)"
    },
    background: {
      default: "#282C34",
      dark: "#1c2025",
      paper: "#282C34"
    },
    primary: {
      main: "#8a85ff"
    },
    secondary: {
      main: "#8a85ff"
    },
    text: {
      primary: "#e6e5e8",
      secondary: "#adb0bb"
    }
  },
  shadows: strongShadows
}, {
  name: THEMES.UNICORN,
  palette: {
    type: "dark",
    action: {
      active: "rgba(255, 255, 255, 0.54)",
      hover: "rgba(255, 255, 255, 0.04)",
      selected: "rgba(255, 255, 255, 0.08)",
      disabled: "rgba(255, 255, 255, 0.26)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)"
    },
    background: {
      default: "#2a2d3d",
      dark: "#222431",
      paper: "#2a2d3d"
    },
    primary: {
      main: "#a67dff"
    },
    secondary: {
      main: "#a67dff"
    },
    text: {
      primary: "#f6f5f8",
      secondary: "#9699a4"
    }
  },
  shadows: strongShadows
}]

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme)

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`))
    [themeOptions] = themesOptions
  }

  let theme = createMuiTheme(
    _.merge(
      {},
      baseOptions,
      themeOptions,
      { direction: config.direction }
    )
  )

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return theme
}
