import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"
import HomePage from "../pages/HomePage"
import SingleMovie from "../pages/SingleMovie"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movie/:id" Component={SingleMovie} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
