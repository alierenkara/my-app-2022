import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Homepage from "./routes/auth/homepage"
import Login from "./routes/guest/login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
