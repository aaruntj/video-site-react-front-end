import "./VideoText.scss"
import viewsIcon from "../../assets/icons/views.svg"
import likesIcon from "../../assets/icons/likes.svg"

function VideoText() {
  return (
    <section className="videotext">
      <h1 className="videotext__title">"insert title here"</h1>
      <section className="videotext__details-container">
        <section className="videotext__author-date">
          <p className="videotext__author">By "insert author here"</p>
          <p className="videotext__date">"insert date here"</p>
        </section>
        <section className="videotext__views-likes">
          <section className="videotext__views">
            <img className="videotext__views-icon" src={viewsIcon} alt="Views"/>
            <p className="videotext__views-text">"viewcount"</p>
          </section>
          <section className="videotext__likes">
            <img className="videotext__likes-icon" src={likesIcon} alt="Likes"/>
            <p className="videotext__likes-text">"like count"</p>
          </section>
        </section>
      </section>
      <p className="videotext__description">"insert video description here. On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title"</p>
    </section>
    
  )
}

export default VideoText