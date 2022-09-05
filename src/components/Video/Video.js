import "./Video.scss"
import playIcon from "../../assets/icons/play.svg"
import scrubIcon from "../../assets/icons/scrub.svg"
import fullscreenIcon from "../../assets/icons/fullscreen.svg"
import volumeIcon from "../../assets/icons/volume_up.svg"

function Video({poster, duration}) {
  return (
    <section className="video">
      <section className="video__container">
        <video className="video__video" poster={poster} />
        <section className="video__controls">
          <section className="video__play-container">
            <img className="video__play-icon" src={playIcon} />
          </section>
          <section className="video__timestamp-container">
            <div className="video__timestamp-bar" />
            <p>0:00/{duration}</p>
          </section>
          <section className="video__options-container">
            <img className="video__fullscreen-icon" src={fullscreenIcon} />
            <img className="video__volume-icon" src={volumeIcon} />
          </section>
        </section>
      </section>
    </section>
  )
}

export default Video