import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./layouts/Header/Header"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Error from "./pages/Error"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/register/:registerId" element={<Registration />} />
          <Route path="/NOT_FOUND" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
