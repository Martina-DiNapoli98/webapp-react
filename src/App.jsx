import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"
import HomePage from "../pages/HomePage"
import SingleMovie from "../pages/SingleMovie"
import NotFound from "../pages/NotFound"
import GlobalContext from "../Contexts/GlobalContext"
import { useState } from "react"

function App() {

  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/movie/:id" Component={SingleMovie} />
              <Route path="/*" Component={NotFound} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
