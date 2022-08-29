import "./UploadVideo.scss"
import publishIcon from "../../assets/icons/publish.svg"

function UploadVideo() {
  return (
    <>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>

        <section className="upload__container">
          <section className="upload__image">
            <p className="upload__image-heading">VIDEO THUMBNAIL</p>
            <img className="upload__image-image" src={require("../../assets/images/Upload-video-preview.jpg")} alt="Upload Thumbnail"/>
          </section>

          <section className="upload__form">
            <section className="upload__form-text">
              <p className="upload__form-text-heading">TITLE YOUR VIDEO</p>
              <input type="text" className="" placeholder="Add a title to your video"/>
              <p className="upload__form-text-heading">ADD A VIDEO DESCRIPTION</p>
              <input type="text" className="" placeholder="Add a description to your video"/>
            </section>
            <section className="upload__buttons">
              <button className="upload__publish-button">
                <img className="upload__publish-button-icon" src={publishIcon} alt="Publish Icon"/>
                <p className="upload__publish-button-text">PUBLISH</p>
              </button>
              <button className="upload__cancel-button">CANCEL</button>
            </section>
          </section>

        </section>
      </section>
    </>
  )
}

export default UploadVideo