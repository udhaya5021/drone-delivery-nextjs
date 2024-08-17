// 'use client';
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Col, Input, Row } from "reactstrap";
import contact_us from "../assets/images/contact_us.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { removeToast, toastShow } from "./Constants/Utils";

export default function ContactUs() {
  var emailRegex =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const [formData, setFormData] = useState({
    yourName: "",
    business_name: "",
    email: "",
    phonenumber: "",
    comments: "",
  });
  const [phoneselect, setPhoneselect] = useState("");
  const [errorName, setErrorName] = useState("");
  const [erroremail, setErroemail] = useState("");
  const handleChange = (e) => {
    console.log(e, "event");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange1 = (value, country, e, formattedValue) => {
    console.log(e.target.value);
    console.log(e, country, formattedValue, "e");
    setPhoneselect(value);
  };
  console.log(phoneselect, "phoneselect");
  const submitForm = () => {
    removeToast();
    var phonecom = phoneselect;
    if (!formData.yourName) {
      toastShow("Please enter your name", "yourName");
    } else if (!formData.email) {
      toastShow("Please enter Email", "email");
    } else if (!emailRegex.test(formData.email)) {
      toastShow("Please enter valid email", "email");
    } else if (!formData.post_code) {
      toastShow("Please enter Postal code", "post_code");
    } else {
      var data = `Hi, This is ${
        formData.yourName
      }, I would like to know more about Drone delivery.mobile is %2B${phonecom} and email is ${
        formData.email
      } ${formData.comments !== "" ? `I need ${formData.comments}` : ""}`;
      console.log(data, "data");
      window.open(
        "https://api.whatsapp.com/send?phone=8124273963&text=" + data,
        "_blank"
      );
    }
  };
  // console.log(phoneselect, "select");
  return (
    <React.Fragment>
      <Head>
        <title>Drone Delivery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="facebook-domain-verification"
          content="35rqmardx2q4jwgqqmya8swqnhfy1f"
        />
      </Head>
      <section className="aboutus-section">
        <div className="container">
          <Row>
            <Col
              className="text-align-center mb-3"
              style={{ position: "relative" }}
              md="12" 
              lg="6"
            >
              <div className="contact_us">Contact Us</div>
              <Image src={contact_us} alt="" />
            </Col>

            <Col className="marginTop20 mb-3" md="12" sm="6" lg="6">
              <div className="">
                <Row>
                  <Col md="12" className="mb-3" sm="12" lg="12">
                    <div className="contact_wrap_input">
                      <div className="form-group">
                        <div className="input text">
                          <Input
                            type="text"
                            name="yourName"
                            id="name"
                            className="form-control"
                            onChange={(e) => handleChange(e)}
                            placeholder="Name"
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="12" className="mb-3" sm="12" lg="12">
                    <div className="contact_wrap_input">
                      <div className="form-group">
                        <div className="input text">
                          <Input
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="">
                <Row>
                  <Col md="12" className="mb-3" sm="12" lg="12">
                    <div className="contact_wrap_input">
                      <div className="form-group">
                        <div className="input text">
                          <Input
                            type="text"
                            name="post_code"
                            id="post_code"
                            className="form-control"
                            onChange={(e) => handleChange(e)}
                            placeholder="Postal code"
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="">
                <Row>
                  <Col md="12" className="mb-3" sm="12" lg="12">
                    <div className="contact_wrap_input">
                      <div className="form-group">
                        <div className="input text">
                          <PhoneInput
                            country="us"
                            className="marginBottom"
                            enableSearch={true}
                            value={phoneselect}
                            onChange={handleChange1}
                            name="phonenumber"
                            placeholder={"Mobile Number"}
                            countryCodeEditable={false}
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="">
                    <div className="contact_wrap_input">
                      <div className="form-group">
                        <Input
                          type="textarea"
                          className="form-control"
                          name="comments"
                          onChange={(e) => handleChange(e)}
                          placeholder="Message"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

                <div>
                  <a
                    href="javascript:void(0);"
                    className="contact_btn_submit mt-5"
                    onClick={submitForm}
                  >
                    Submit
                  </a>
                </div>
            </Col>
          </Row>
        </div>
      </section>
    </React.Fragment>
  );
}
