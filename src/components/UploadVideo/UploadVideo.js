import "./UploadVideo.scss"
import publishIcon from "../../assets/icons/publish.svg"
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"

function UploadVideo() {
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    const title = event.target.title.value
    const description = event.target.description.value

    try {
      const response = await axios.post("http://localhost:8080/videos", { title, description })
      // console.log(response)
      alert("Successfully posted video")
      navigate("/home")
    } catch(error) {
      console.log("error: ", error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="upload">
        <h1 className="upload__title">Upload Video</h1>

        <section className="upload__container">
          <section className="upload__image">
            <p className="upload__image-heading">VIDEO THUMBNAIL</p>
            <img className="upload__image-image" src={require("../../assets/images/Upload-video-preview.jpg")} alt="Upload Thumbnail"/>
          </section>

          <section className="upload__form">
            <section className="upload__form-text">
              <p className="upload__form-text-heading">TITLE YOUR VIDEO</p>
              <input id="title" name="title" type="text" className="upload__form-text-input-title" placeholder="Add a title to your video" />
              <p className="upload__form-text-heading">ADD A VIDEO DESCRIPTION</p>
              <input id="description" name="description" type="text" className="upload__form-text-input-description" placeholder="Add a description to your video"/>
            </section>
          </section>
        </section>

        <section className="upload__buttons">
            <button type="submit" className="upload__publish-button" >
              <img className="upload__publish-button-icon" src={publishIcon} alt="Publish Icon"/>
              <p className="upload__publish-button-text">PUBLISH</p>
            </button>
          <Link to="/home" className="upload__cancel-button">CANCEL</Link>
        </section>
      </form>
    </>
  )
}

export default UploadVideo