import { useState } from "react"

import { useHistory } from "react-router-dom"

import Box from "@material-ui/core/Box"
import Menu from "@material-ui/core/Menu"
import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Toolbar from "@material-ui/core/Toolbar"
import Divider from "@material-ui/core/Divider"
import MenuItem from "@material-ui/core/MenuItem"
import IconButton from "@material-ui/core/IconButton"
import SettingsIcon from "@material-ui/icons/Settings"
import LanguageIcon from "@material-ui/icons/Language"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { makeStyles } from "@material-ui/core/styles"

import useSettings from "../hooks/useSettings"
import { THEMES } from "../theme/constants"

const useStyles = makeStyles((theme) => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            }
        }
    },
    appbar: {
        margin: 0,
    },
    title: {
    },
    themeOneButton: {
        backgroundColor: "#ff9800",
        borderRadius: 35,
        marginBottom: 8,
        margin: 5,
        borderStyle: "solid"
    },
    themeTwoButton: {
        backgroundColor: "#8a85ff",
        borderRadius: 35,
        marginBottom: 8,
        margin: 5,
        borderStyle: "solid"
    },
    themeThreeButton: {
        backgroundColor: "#a67dff",
        borderRadius: 35,
        marginBottom: 8,
        margin: 5,
        borderStyle: "solid"
    }
}))

const Navbar = ({ back }) => {
    const classes = useStyles()
    const { settings, saveSettings } = useSettings()
    const [settingMenu, setSettingMenu] = useState(null)
    const history = useHistory()

    const handleChangeTheme = theme => {
        saveSettings({ theme })
    }
    const handleClick = event => setSettingMenu(event.currentTarget)
    const handleClose = () => setSettingMenu(null)

    const handleChangeLanguage = () => {
        settings.language === "English"
            ? saveSettings({ direction: "rtl", language: "Arabic" })
            : saveSettings({ direction: "ltr", language: "English" })
        setSettingMenu(null)
    }

    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Grid container direction="row" alignItems="center" justify="space-between">

                    <Grid item xs={3} container justify="center">
                        {
                            back && <IconButton onClick={() => history.goBack()}>
                                <ArrowBackIcon />
                            </IconButton>
                        }
                        <Button className={classes.title} onClick={() => history.push()}>
                            React Colors
                        </Button>
                    </Grid>


                    <Grid item xs={3} container justify="center">
                        <IconButton onClick={handleClick}>
                            <SettingsIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>

            <Menu keepMounted elevation={0} onClose={handleClose} anchorEl={settingMenu} className={classes.root} getContentAnchorEl={null} open={Boolean(settingMenu)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }}>
                <MenuItem className={classes.root} onClick={handleChangeLanguage}>
                    <ListItemIcon>
                        <LanguageIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={settings.language} />
                </MenuItem>
                <Divider />
                <Grid className={classes.root} >
                    <Grid container justify="center" alignItems="center">
                        <IconButton onClick={() => handleChangeTheme(THEMES.LIGHT)} className={classes.iconButton}>
                            <Box width={20} height={20} className={classes.themeOneButton} />
                        </IconButton>
                        <IconButton onClick={() => handleChangeTheme(THEMES.ONE_DARK)} className={classes.iconButton}>
                            <Box width={20} height={20} className={classes.themeTwoButton} />
                        </IconButton>
                        <IconButton onClick={() => handleChangeTheme(THEMES.UNICORN)} className={classes.iconButton}>
                            <Box width={20} height={20} className={classes.themeThreeButton} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider />
            </Menu>

        </AppBar>
    )
}

export default Navbar
