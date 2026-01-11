import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import FAQ from "./pages/FAQ"
import Recruit from "./pages/Recruit"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/questions" element={<FAQ />} />
        <Route path="/recruit" element={<Recruit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
