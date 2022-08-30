import Video from "../../components/Video/Video"
import VideoText from "../../components/VideoText/VideoText"
import Comments from "../../components/Comments/Comments"
import NextVideos from "../../components/NextVideos/NextVideos"
import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"

const apiKey="4b78566d-9793-4f16-ad40-2f00b7cc111c"
const apiSuffix=`?api_key=${apiKey}`
const apiUrl = 'https://project-2-api.herokuapp.com'

const videosUrl = `${apiUrl}/videos${apiSuffix}`
const videoDetailsUrl = (id) => `${apiUrl}/videos/${id}${apiSuffix}`

function formatDate(timestamp){
  return new Date(timestamp).toLocaleDateString()
}

function HomePage() {
  const {videoId} = useParams();
  const [video,setVideo] = useState();
  const [videos,setVideos] = useState();

  // Fetch list of videos
  useEffect(() => {
    axios
      .get(videosUrl)
      .then(response =>{
        setVideos(response.data)

        if (!videoId) {
          const firstVideoId = response.data[0].id
          axios
            .get(videoDetailsUrl(firstVideoId))
            .then(response =>{
              setVideo(response.data)
            })  
        }
      })
      
  }, []);

  // Fetch individual video
  useEffect(() => {
    console.log("triggered")
    if (videoId) {
      axios
      .get(videoDetailsUrl(videoId))
      .then(response =>{
        setVideo(response.data)
      })
      .catch(error =>{
        console.log("error")
        // set setvideo to error state here !!!
      })
    } else {
      // setVideo(videos && videos[0]) CHECK IF VIDEOS IS SET HERE
    }
  }, [videoId]);
 
  return (
    <>
      {video ?
      <>
        <Video poster={video.image}/>
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
      </> : <p>Loading...</p>}
    </>
  )
}

export default HomePage