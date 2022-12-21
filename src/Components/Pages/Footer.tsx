import React from "react";
import "./styleFooter.css"

const Footer=()=>{


    return(
    <div className="footer">
        <div className="footer-title">
            <p className="footer-title-section">STARBUCKS</p>
            <p className="footer-title-section">© 2022</p>
        </div>
        <div className="footer-about">
            <p className="footer-title-section">About</p>
            <p>Our Company</p>
            <p>Our Coffee</p>
            <p>Customer Service</p>
            <p>News</p>
        </div>
        <div className="footer-careers">
            <p className="footer-title-section">Careers</p>
            <p>Our Leaders</p>
            <p>Employee of the Month</p>
            <p>US Careers</p>
            <p>International Careers</p>
        </div>
        <div className="footer-social">
            <p className="footer-title-section">Social</p>
            <p>Social Responsability</p>
            <p>Our Planet</p>
            <p>People</p>
            <p>You</p>
        </div>


    </div>)
}

export default Footer