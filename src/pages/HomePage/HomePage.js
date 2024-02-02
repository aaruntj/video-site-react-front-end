import Video from "../../components/Video/Video"
import VideoText from "../../components/VideoText/VideoText"
import Comments from "../../components/Comments/Comments"
import NextVideos from "../../components/NextVideos/NextVideos"
import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"

const apiUrl = 'http://localhost:8080'

const videosUrl = `${apiUrl}/videos`
const videoDetailsUrl = (id) => `${apiUrl}/videos/${id}`

function formatDate(timestamp){
  return new Date(timestamp).toLocaleDateString()
}

function HomePage() {
  const {videoId} = useParams()

  const [video,setVideo] = useState()
  const [videos,setVideos] = useState()

  const [pageRefresh,setPageRefresh] = useState(false)
  const [videoError,setvideoError] = useState(false)

  // Fetch list of videos
  useEffect(() => {
    async function getVideoList() {
      try {
        const videosResponse = await axios.get(videosUrl)
        setVideos(videosResponse.data)
        if (!videoId) {
          const firstVideoId = videosResponse.data[0].id
          const firstVideoResponse = await axios.get(videoDetailsUrl(firstVideoId))
          setVideo(firstVideoResponse.data)
        }
      } catch(error){
        console.log("error: ",error)
      }
    }
    getVideoList()
  }, [pageRefresh]);

  // Fetch individual video
  useEffect(() => {
    if (videoId) {
      async function getIndividualVideo(){
        try {
          const response = await axios.get(videoDetailsUrl(videoId))
          setVideo(response.data)
        } catch(error) {
          console.log("error: ",error)
          setvideoError(true)
        }
      }
      getIndividualVideo()
    } else {
      setPageRefresh(!pageRefresh)
    }
  }, [videoId]);
 
  return (
    <>
      {video || videoError ?
          <>
            {videoError ? <p>Sorry, no video ID match</p> :
              <>
                <Video
                  duration={video.duration}
                  poster={video.image}
                />
                <section className="videotext-comments-nextvideos-section">
                  <section className="videotext-comments-section">    
                    <VideoText
                      videoTitle={video.title}
                      videoTimestamp={formatDate(video.timestamp)}
                      videoChannel={video.channel}
                      videoViews={video.views}
                      videoLikes={video.likes}
                      videoDescription={video.description}
                    />
                    <Comments 
                      comments={video.comments}
                      formatDate={formatDate}
                    />
                  </section>
                  <section className="nextvideos-section">
                    <NextVideos
                    videos={videos}
                    videoId={videoId}
                    />
                  </section>
                </section>
              </> }
          </>
      : <p>Loading...</p>}
    </>
  )
}

export default HomePage