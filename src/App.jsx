import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"
import HomePage from "../pages/HomePage"
import SingleMovie from "../pages/SingleMovie"
import NotFound from "../pages/NotFound"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movie/:id" Component={SingleMovie} />
            <Route path="/*" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
