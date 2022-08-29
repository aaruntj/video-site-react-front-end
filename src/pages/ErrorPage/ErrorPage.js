import "./ErrorPage.scss"

function ErrorPage() {
  return (
    <>
      <h1 className="eror-content">Welcome to the error page</h1>
      <h2 className="error-content">Nothing to see here... 👀</h2>
      <img className="error-content" src={require("../../assets/images/rick.gif")} alt="Rick"/>
    </>
  )
}

export default ErrorPage