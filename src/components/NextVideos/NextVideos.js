import "./NextVideos.scss"
import NextVideo from "../NextVideo/NextVideo"
import {Link} from "react-router-dom"

function NextVideos({videos,videoId}) {
  return (
    <section className="nextvideos">
      <p className="nextvideos__title">NEXT VIDEOS</p>

      {videos ? videos
        .filter(hello => hello.id !== videoId)
        .map(video =>
          <Link
            key={video.id}
            to={`/home/${video.id}`}>
              <NextVideo
              name={video.title}
              channel={video.channel}
              image={video.image}
              />
          </Link>
        ) : <p>Loading...</p>}
    </section>
  )
}

export default NextVideos