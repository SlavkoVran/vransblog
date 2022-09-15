import { Link } from "react-router-dom"
import "./notFound.css"

const NotFound = () => {
  return (
    <div className="notFoundContainer innerBox">
      <h2 className="title">Sorry</h2>
      <p className="text">That page cannot be found</p>
      <Link to="/">Go to the homepage...</Link>
    </div>
  );
}

export default NotFound;