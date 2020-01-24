import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {StorageProvider} from "./Storage"


ReactDOM.render(
<StorageProvider>
    <App />
</StorageProvider>
,document.getElementById("root"))