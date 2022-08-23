import "./App.scss"
import Header from "./components/Header/Header"
import Video from "./components/Video/Video"
import VideoText from "./components/VideoText/VideoText"
import Comments from "./components/Comments/Comments"
import NextVideos from "./components/NextVideos/NextVideos"
import videoDetails from "./data/video-details.json"
import {useState} from "react"


export function formatDate(timestamp){
  return new Date(timestamp).toLocaleDateString()
}


function App() {

  const [currentVideo,setCurrentVideo] = useState(videoDetails[0])
  // console.log(currentVideo)

  function selectVideo(videoId){
    const nextVideo = videoDetails.find(video => video.id === videoId)
    // console.log(nextVideo)
    setCurrentVideo(nextVideo)
  }

  
  return (
    <>
      <Header />
      <Video poster={currentVideo.image}/>
      <section className="videotext-comments-nextvideos-section">
        <section className="videotext-comments-section">    
          <VideoText
          videoTitle={currentVideo.title}
          videoTimestamp={currentVideo.timestamp}
          videoChannel={currentVideo.channel}
          videoViews={currentVideo.views}
          videoLikes={currentVideo.likes}
          videoDescription={currentVideo.description}
          />
          <Comments 
          comments={currentVideo.comments}
          />
        </section>
        <section className="nextvideos-section">
          <NextVideos setCurrentVideo={selectVideo} />
        </section>
      </section>
    </>
  )
}

export default App
