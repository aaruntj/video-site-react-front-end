import "./Comment.scss"

function Comment({name,comment,timestamp,}) {
  return (
    <section className="comment__comment-container">
      <img className="comment__comment-avatar" src={require("../../assets/images/grey-avatar.png")} alt="Avatar"/>
      <section className="comment__text-container">
        <section className="comment__name-date">
          <p className="comment__name">{name}</p>
          <p className="comment__date">{timestamp}</p>
        </section>
        <p className="comment__comment-text">{comment}</p>
      </section>
    </section>
  )
}

export default Comment