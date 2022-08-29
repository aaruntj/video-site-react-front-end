import "./App.scss"

import Header from "./components/Header/Header"

import HomePage from "./pages/HomePage/HomePage"
import UploadVideoPage from "./pages/UploadVideoPage/UploadVideoPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"

import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<UploadVideoPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
