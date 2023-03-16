import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./layouts/Header/Header"
import Home from "./pages/Home"
import Registration from "./pages/Registration"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
