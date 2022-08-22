import "./App.scss"
import Header from "./components/Header/Header"
import Video from "./components/Video/Video"
import VideoText from "./components/VideoText/VideoText"
import Comments from "./components/Comments/Comments"
import NextVideos from "./components/NextVideos/NextVideos"


function App() {


  
  return (
    <>
      <Header />
      <Video />
      <section className="videotext-comments-nextvideos-section">
        <section className="videotext-comments-section">    
          <VideoText />
          <Comments />
        </section>
        <section className="nextvideos-section">
          <NextVideos />
        </section>
      </section>
    </>
  )
}

export default App
