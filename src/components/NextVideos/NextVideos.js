import "./NextVideos.scss"
import NextVideo from "../NextVideo/NextVideo"
import videos from "../../data/videos.json"

function NextVideos() {
  console.log(videos)
  return (
    <section className="nextvideos">
      <p className="nextvideos__title">NEXT VIDEOS</p>
      {videos.map(videos =>
        <NextVideo
        key={videos.id}
        name={videos.title}
        channel={videos.channel}
        image={videos.image}
        />
      )}
    </section>
  )
}

export default NextVideos