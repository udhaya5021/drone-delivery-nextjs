"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import "aos";

import pos_home_image3 from "../assets/images/drone_delivery.png"

import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";
import invoice_vat from "../assets/images/invoice-vat.png";
import customer_notify from "../assets/images/customer-notify.png";
import payment_receive from "../assets/images/payment-receive.png";
import create_one from "../assets/images/create_one.svg";
import create_two from "../assets/images/create_two.svg";
import create_three from "../assets/images/create_three.svg";
import border_line from "../assets/images/border-line.svg";

export default function Home() {
  const ref1 = useRef(null);
  const [modalvisible, setModalvisible] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  
 

 
  useEffect(() => {
    loadSlideFn();
  }, []);
  const loadSlideFn = () => {
    var slideNew1 = 0;
    setInterval(() => {
      slideNew1++;
      if (slideNew1 === 1) {
        document.querySelector(".invoice-steps-hover") &&
          document.querySelector(".invoice-steps-hover[data-id='1']").click();
      } else if (slideNew1 === 2) {
        document.querySelector(".invoice-steps-hover") &&
          document.querySelector(".invoice-steps-hover[data-id='2']").click();
      } else if (slideNew1 === 3) {
        document.querySelector(".invoice-steps-hover") &&
          document.querySelector(".invoice-steps-hover[data-id='3']").click();
      } else {
        slideNew1 = 1;
        document.querySelector(".invoice-steps-hover") &&
          document.querySelector(".invoice-steps-hover[data-id='1']").click();
      }
    }, 3000);
  };
  const collectionsFn = (id) => {
    for (
      var i = 0;
      i < document.querySelectorAll(".invoice-steps-hover").length;
      i++
    ) {
      document
        .querySelectorAll(".invoice-steps-hover")
        [i].classList.remove("active");
      document
        .querySelectorAll("[data-slideimage]")
        [i].classList.add("slide_visible_view");
    }
    if (id === "1") {
      document
        .querySelector("[data-slideimage='1']")
        .classList.remove("slide_visible_view");
    } else if (id === "2") {
      document
        .querySelector("[data-slideimage='2']")
        .classList.remove("slide_visible_view");
    } else if (id === "3") {
      document
        .querySelector("[data-slideimage='3']")
        .classList.remove("slide_visible_view");
    }
    document
      .querySelectorAll(".invoice-steps-hover")
      [id - 1].classList.add("active");
  };
  return (
    <React.Fragment>
      <Head>
        <title>
          Drone delivery - Online Platform | Ecommerce Merchant Payment Gateway
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="facebook-domain-verification"
          content="35rqmardx2q4jwgqqmya8swqnhfy1f"
        />
      </Head>
      <div className="component-container">
        <div className="fp_new_home section_scroll" ref={ref1}>
          <video autoPlay muted loop id="myVideo" className="backgroundVideo">
            <source src={"/bg_video.mp4"} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <section className="create-invoice-step">
          <div className="container">
            <Row>
              <Col md="6">
                <Image
                  alt=""
                  className="slide_visible_view drop_size"
                  src={invoice_vat}
                  data-slideimage="1"
                />
                <Image
                  alt=""
                  className="slide_visible_view drop_size"
                  src={customer_notify}
                  data-slideimage="2"
                />
                <Image
                  alt=""
                  className="slide_visible_view drop_size"
                  src={payment_receive}
                  data-slideimage="3"
                />
              </Col>
              <Col md="6">
                <div className="col-xs-12 no-padding">
                  <p className="instant-pay">Instantly delivery </p>
                  <p className="instant-pay-content ar_float_right">
                  Ensure the package is securely packed and meets weight and size limitations.
                  </p>
                  <div
                    className="create-vat invoice-steps-hover"
                    data-slide="1"
                    data-id="1"
                    onClick={() => collectionsFn("1")}
                  >
                    <Image
                      src={create_one}
                      alt=""
                      className="create_one ar_float_right"
                    />
                    <p className="step-one ar_float_right">
                    Package Inspection
                    </p>
                    <div className="invoice_desc">
                      <p className="create-vat-content ar_float_right">
                      Ensure the package is securely packed.
                      </p>
                      <Image
                        src={border_line}
                        alt=""
                        className="border-line ar_float_right"
                      />
                    </div>
                  </div>
                  <div
                    className="create-vat invoice-steps-hover"
                    data-slide="2"
                    data-id="2"
                    onClick={() => collectionsFn("2")}
                  >
                    <Image
                      src={create_two}
                      alt=""
                      className="create_one ar_float_right"
                    />
                    <p className="step-one ar_float_right">
                    Real-Time Tracking
                    </p>
                    <div className="invoice_desc">
                      <p className="create-vat-content ar_float_right">
                      Monitor the drone’s position during the flight.
                      </p>
                      <Image
                        src={border_line}
                        alt=""
                        className="border-line ar_float_right"
                      />
                    </div>
                  </div>
                  <div
                    className="create-vat invoice-steps-hover"
                    data-slide="3"
                    data-id="3"
                    onClick={() => collectionsFn("3")}
                  >
                    <Image
                      src={create_three}
                      alt=""
                      className="create_one ar_float_right"
                    />
                    <p className="step-one ar_float_right">
                    Package Drop-Off
                    </p>
                    <div className="invoice_desc">
                      <p className="create-vat-content ar_float_right">
                      Safely lower the package at the designated location.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>

  
      <div className="pos_sec_bg">
<div className="container">
<div className="pos_sec_bg1">
                        <div className="pos_sec_bgLeft pos_sec_bgLeftCont">
                            <div className="pos_sec_bgHead" data-aos="fade-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000">Drone Delivery - Revolutionizing Logistics</div>
                            <ul>
                                <li data-aos="fade-up"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">Experience a complete transformation in delivery services with drone technology, eliminating the need for traditional vehicles.</li>
                                <li data-aos="fade-up"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">Drone delivery systems provide real-time tracking and updates, ensuring precise and timely deliveries.</li>
                                <li data-aos="fade-up"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">These systems utilize advanced GPS and AI to optimize routes, reduce delivery times, and minimize carbon emissions.</li>
                            </ul>
                        </div>
                        <div className="pos_sec_bgRight text-center">
                            <Image src={pos_home_image3} />
                        </div>
                    </div>
         </div>
      </div>
      <section className="footer-banner col-xs-12">
        <p>
          <span dangerouslySetInnerHTML={{ __html: "Contact customer care anytime for real-time updates and personalized support on your order or service"}}></span>
        </p>
        <div className="create-invoice-button">
          <a href="contact-us">
            Contact Us
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}
