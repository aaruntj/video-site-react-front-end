import "./Comments.scss"
import commentIcon from "../../assets/icons/add_comment.svg"
import Comment from "../Comment/Comment"

function Comments() {
  return (
    <section className="comments">
      
      <p className="comments__number">"numberofcomments" Comments</p>
      <section className="comments__add-container">
        <img className="comments__add-avatar" src={require("../../assets/images/Mohan-muruge.jpg")} alt="Avatar"/>
        <section className="comments__heading-input-button">
          <section className="comments__heading-input">
            <p className="comments__heading">JOIN THE CONVERSATION</p>
            <input type="text" className="comments__input" id="" name="" placeholder="Add a new comment"/>
          </section>
          <button className="comments__button">
            <img className="comments__button-icon" src={commentIcon} alt="Upload"/>
            <p className="comments__button-text">COMMENT</p>
          </button>
        </section>
      </section>

      <Comment />
      
    </section>
  )
}

export default Comments