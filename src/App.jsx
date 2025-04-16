import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" element={<h1>Movies</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
