import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <div className="main-footer">
            <h5>Copyright {new Date().getFullYear()}</h5>
        </div>
    )
}

export default Footer