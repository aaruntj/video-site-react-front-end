import "./Video.scss"

function Video({poster}) {
  return (
    <section className="video">
      <section className="video__container">
        <video className="video__video" poster={poster} />
      </section>
    </section>
  )
}

export default Video