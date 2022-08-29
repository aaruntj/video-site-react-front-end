import "./App.scss"
import Header from "./components/Header/Header"
import Video from "./components/Video/Video"
import VideoText from "./components/VideoText/VideoText"
import Comments from "./components/Comments/Comments"
import NextVideos from "./components/NextVideos/NextVideos"
import videoDetails from "./data/video-details.json"

import HomePage from "./pages/HomePage/HomePage"
import UploadVideoPage from "./pages/UploadVideoPage/UploadVideoPage"

import {useState} from "react"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import ErrorPage from "./pages/ErrorPage/ErrorPage"



// https://project-2-api.herokuapp.com/


function App() {

  function formatDate(timestamp){
    return new Date(timestamp).toLocaleDateString()
  }

  const [currentVideo,setCurrentVideo] = useState(videoDetails[0])
  // console.log(currentVideo)

  function selectVideo(videoId){
    const nextVideo = videoDetails.find(boi => boi.id === videoId)
    // console.log(nextVideo)
    setCurrentVideo(nextVideo)
  }

  
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
