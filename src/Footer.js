import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href='https://www.instagram.com/accounts/login/?next=/_naviin__/'><InstagramIcon /></a>
      <a href='https://twitter.com/login'><TwitterIcon /></a>
        <a href='https://www.facebook.com/navin.omeo'><FacebookIcon /></a>
        <a href='https://www.linkedin.com/feed/'><LinkedInIcon /></a>
      </div>
      <p> &copy; navinmanikandan303@gmail.com</p>
    </div>
  );
}

export default Footer;