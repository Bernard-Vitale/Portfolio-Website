import React from "react"
import './NotFound.css'
import { Link } from "react-router";

const NoutFound = (props) => {
  return (
    <div className="notFoundContainer">
        <div className="notFoundMessageBox">
            <h1>Error 404: Page Not Found!</h1>
            <Link to='/' id="goHomeBtn">
                Go Back Home
            </Link>
        </div>
    </div>
  )
};

export default NoutFound;
