import "./VideoText.scss"
import viewsIcon from "../../assets/icons/views.svg"
import likesIcon from "../../assets/icons/likes.svg"

function VideoText({videoTitle,videoChannel,videoTimestamp,videoViews,videoLikes,videoDescription}) {
  return (
    <section className="videotext">
      <h1 className="videotext__title">{videoTitle}</h1>
      <section className="videotext__details-container">
        <section className="videotext__author-date">
          <p className="videotext__author">By {videoChannel}</p>
          <p className="videotext__date">{videoTimestamp}</p>
        </section>
        <section className="videotext__views-likes">
          <section className="videotext__views">
            <img className="videotext__views-icon" src={viewsIcon} alt="Views"/>
            <p className="videotext__views-text">{videoViews}</p>
          </section>
          <section className="videotext__likes">
            <img className="videotext__likes-icon" src={likesIcon} alt="Likes"/>
            <p className="videotext__likes-text">{videoLikes}</p>
          </section>
        </section>
      </section>
      <p className="videotext__description">{videoDescription}</p>
    </section>
    
  )
}

export default VideoText