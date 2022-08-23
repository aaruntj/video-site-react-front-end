import "./NextVideo.scss"
import videos from "../../data/videos.json"

function NextVideo({name,channel,image,onClick}) {
  // console.log(videos)
  return (
    <section onClick={onClick} className="nextvideo__container">
      <img className="nextvideo__image" src={image} alt="Video"/>
      <section className="nextvideo__heading-author">
        <p className="nextvideo__heading">{name}</p>
        <p className="nextvideo__author">{channel}</p>
      </section>
    </section>
  )
}

export default NextVideo