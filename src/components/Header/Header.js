import "./Header.scss"
import headerLogo from "../../assets/logo/BrainFlix-logo.svg"
import uploadIcon from "../../assets/icons/upload.svg"


function Header() {
  return (
    <>
      <header className="header">
        <section className="header__logo-container">
          <img className="header__logo" src={headerLogo} alt="Brainflix Logo"/>
        </section>
        <section className="header__input">
          <input type="text" className="header__search" placeholder="Search"/>
          <img className="header__avatar" src={require("../../assets/images/Mohan-muruge.jpg")} alt="Avatar"/>
          <button className="header__button">
            <img className="header__button-icon" src={uploadIcon} alt="Upload"/>
            <p className="header__button-text">UPLOAD</p>
          </button>
        </section>
      </header>
    </>
  )
}

export default Header