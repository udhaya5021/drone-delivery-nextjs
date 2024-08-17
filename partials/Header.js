'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import fp_line_bar from "../assets/images/fp_line_bar.png"
import fp_close from "../assets/images/fp_close.png"

const Header = () => {
  const router = useRouter();
  const routeName = router.pathname.split('/')[1];
  const routes = [ "contact-us","contact-us","about-us"]
 
  const [close, setClose] = useState(false)
  

  return (

    <React.Fragment>
      <header className={(routeName == "" || routeName == "pricing") ? "fp_header-alt" : (routes.includes(routeName)) ? "fp_header_inner" : "fp_header"}>
        <div className="container">
          <a className="fp_new_home_logo" href="/">Drone Delivery</a>
          <a className="fp_icon_open" onClick={() => setClose(!close)}> <Image src={fp_line_bar} alt="" /></a>
          <ul className={(routeName == "" || routeName == "pricing") ? "fp_new_left_header fp_new_left_header-alt fp_xs_drop_align" : "fp_new_left_header fp_xs_drop_align"}>
              <li className="fp_menuitems"><a className="fp_xs_drop" href="about-us">
               About Us
              </a>
               </li>
               <li className="fp_menuitems"><a className="fp_xs_drop" href="contact-us">
               Contact Us
              </a>
               </li>
            </ul>
        </div>
      </header>
      {
        close === true && <React.Fragment>
          <div className="fp_right_nav fp_mb_open">
            <div className="fp_xs_menu">
              <div className="fp_menu">
                Menu                </div>
              <a className="fp_close_icon" onClick={() => setClose(!close)}><Image src={fp_close} alt="" /></a>
            </div>
            <ul className="fp_new_left_header fp_xs_drop_align">
              <li className="fp_menuitems"><a className="fp_xs_drop">
                Products                    </a>
                <ul className="fp_prod_drop">
                  <li>
                    <div className="fp_new_drop">
                      <div className="row">
                        <div className="col-xs-12 col-sm-3 col-md-3">
                          <ul className="fp_new_header_drop_list">
                            <li><a href="about-us">About Us</a></li>
                            <li><a href="contact-us">Contact Us</a></li>
                         
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          
          </div>
        </React.Fragment>
      }
    </React.Fragment >
  );
};

export default Header;
