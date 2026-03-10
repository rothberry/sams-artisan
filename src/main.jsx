// import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import ContextProvider from "./contexts/Context.jsx"
import App from "./App.jsx"
import "./styles/index.css"

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ContextProvider>
            <App />
        </ContextProvider>
    </BrowserRouter>,
)
