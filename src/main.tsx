import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import "./global.css"
import { Toaster } from "react-hot-toast"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Toaster />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
