import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo_new from "../assets/images/drone_icon.png"
import { CardFooter, Col, Row } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <CardFooter className="fp_footer">
        <div className="container">
          <Row>
            <Col className="pul-right"
              md="4"
            >
             <Link href="/">
                <Image src={logo_new} alt="logo" title="logo" style={{width:"53px"}} />
                <i className="fa-solid fa-drone"></i>
              </Link>
            
            </Col>
            <Col
              md="8"
            >
              <Row>
               
                <Col className="fp_foothead"
                  xs="12"
                  sm="4"
                  md="4">
                  <h2>About & Contct</h2>
                  <ul className="fp_ul_footer">
                    <li><Link href="about-us">About Us</Link></li>
                    <li><Link href="contact-us">Contact Us</Link></li>
                </ul>
                  
                </Col>
                <Col
                xs="12"
                sm="4"
                md="4"
                >
                                 
                 <h3 className="fp_footer_pay_logo_head m-0">Social media</h3>
             <div className="rounded-social-buttons">
                   <Link className="social-button facebook" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                   <Link className="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></Link>
                   <Link className="social-button youtube" href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link>
                   <Link className="social-button instagram" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
       
      </CardFooter>
    </React.Fragment>
  );
};

export default Footer;
