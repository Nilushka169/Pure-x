import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className='Footer'>
        <div className='FooterContainer'>
            <div className='row'>
                <div className='Footer-col'>
                    <h4>Pure-X</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div className='Footer-col'>
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">Faq</a></li>
                        <li><a href="#">Mokak hari</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div className='Footer-col'>
                    <h4>mokak hari</h4>
                    <ul>
                        <li><a href="#">mokak hari damu</a></li>
                        <li><a href="#">mokak hari damu</a></li>
                        <li><a href="#">mokak hari damu</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div className='Footer-col'>
                    <h4>Follow Us</h4>
                    <div className='social-links'>
                        <a href='#'><i className='fab fa-facebook-f'></i></a>
                        <a href='#'><i className='fab fa-instagram'></i></a>
                        <a href='#'><i className='fab fa-twitter'></i></a>
                        <a href='#'><i className='fab fa-linkedin'></i></a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='Bottom'>
               <h4>© 2013-2024 All Rights Reserved </h4> 
            </div>
        </div>
    </div>
  )
}

export default Footer