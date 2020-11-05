import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { SettingsProvider } from "./contexts/SettingsContext"
import { SnackbarProvider } from "notistack"

ReactDOM.render(
  <SettingsProvider>
    <SnackbarProvider maxSnack={4}>
      <App />
    </SnackbarProvider>
  </SettingsProvider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
