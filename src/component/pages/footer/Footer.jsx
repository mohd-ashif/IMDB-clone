import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="icons">
      
  <i class="fab fa-tiktok"></i>
  

  <i class="fab fa-instagram"></i>
  

  <i class="fab fa-twitter"></i>
  
  
  <i class="fab fa-facebook"></i>
  
 
  <i class="fab fa-youtube"></i>
      </div>

<div class="second__footer">
<ul className="unstyled" style={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}>
    <li style={{ margin: '0 10px' }}><a href="#">Contact Us</a></li>
    <li style={{ margin: '0 10px' }}><a href="#">Account</a></li>
    <li style={{ margin: '0 10px' }}><a href="#">News</a></li>
    <li style={{ margin: '0 10px' }} className="spacer"></li>
    <li style={{ margin: '0 10px' }}><a href="#">Press Room</a></li>
    <li style={{ margin: '0 10px' }}><a href="#">Advertising</a></li>
    <li style={{ margin: '0 10px' }}><a href="#">Jobs</a></li>
  </ul>
                            </div>
                            
      <div className="footer__head">
      <ul className="unstyled" style={{ display: 'flex', listStyle: 'none', color:"white" }}>
  <li style={{ margin: '0 10px' }}><a href="#">Home</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">Top Rated Movies</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">Box Office</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">TV</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">Coming Soon</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">Site Index</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">Search</a></li>
  <li style={{ margin: '0 10px' }}><a href="#">In Theaters</a></li>
</ul>

  
      </div>

      <div className="date">
      © 1990 - 2023 by IMDB.com,Inc.
      </div>
    

    </footer>
  );
}

export default Footer;
