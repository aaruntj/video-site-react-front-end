import "./Header.scss"
import headerLogo from "../../assets/logo/BrainFlix-logo.svg"
import searchIcon from "../../assets/icons/search.svg"
import uploadIcon from "../../assets/icons/upload.svg"

import {Link} from "react-router-dom"


function Header(
  // videoRefresh,setVideoRefresh
  ) {
  return (
    <>
      <header className="header">
        <section className="header__logo-container">
          <Link to="/home" >
            <img className="header__logo" src={headerLogo} alt="Brainflix Logo"/>
          </Link>
        </section>
        <section className="header__input">
          <section className="header__input-container">
            <input type="text" className="header__search" placeholder="Search"/>
            <img className="header__input-icon" src={searchIcon} />
          </section>
          <img className="header__avatar" src={require("../../assets/images/Mohan-muruge.jpg")} alt="Avatar"/>
          <Link className="header__button" to="/upload">
            <button className="header__button">
              <img className="header__button-icon" src={uploadIcon} alt="Upload"/>
              <p className="header__button-text">UPLOAD</p>
            </button>
          </Link>
        </section>
      </header>
    </>
  )
}

export default Header