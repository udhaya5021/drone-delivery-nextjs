'use client';
import React, { useState } from "react";
import Head from 'next/head';
import {
    Row, Col,
    TabContent,
    TabPane,
    NavItem,
    NavLink,
    Nav,
    Card,
    CardBody

} from "reactstrap";

export default function Store() {
    const [activeTab, setActiveTab] = useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }
    return (
        <React.Fragment>
            <Head>
                <title>drone Technology – Marketplace UAE | Merchant Payment in UAE – About Us</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="facebook-domain-verification" content="35rqmardx2q4jwgqqmya8swqnhfy1f" />
            </Head>
           <Card>
            <CardBody>
              <Row className="card_merchant mt-5">
                <Col lg="2" sm="3">
                  <Nav className="flex-column" pills>
                    <NavItem>
                      <NavLink
                        className={activeTab == "1" ? "active" : ""}
                        onClick={() => {
                          setActiveTab("1");
                        }}
                      >
                        <i
                          className="fa fa-credit-card d-block check-nav-icon mt-4 mb-2"
                          aria-hidden="true"
                        ></i>
                        <p className="fw-bold mb-4">Services</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab == "2" ? "active" : ""}
                        onClick={() => {
                          setActiveTab("2");
                        }}
                      >
                        <i
                          className="fa fa-credit-card d-block check-nav-icon mt-4 mb-2"
                          aria-hidden="true"
                        ></i>
                        <p className="fw-bold mb-4"> Features</p>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col lg="7" sm="7">
                  <Card className="mt-0">
                    <CardBody>
                        <TabPane tabId="1" className="active">
                          {activeTab == 1 ? (
                            <ul className="tab-change-ul">
                              <li>
                                <Row>
                                  <Col md="5">
                                    <p className="font-bold">Services</p>
                                  </Col>
                                 
                                  <Col md="12">
                                    <div className="font-size mt-3">
                                    In the fast-paced world we live in, getting packages delivered quickly and safely is more important than ever. Our drone delivery service is here to redefine the delivery experience by offering a faster, more efficient, and eco-friendly solution.
                                    Drone delivery is not just a service; it's the future. With our cutting-edge technology, we're bringing you closer to the world, one delivery at a time. Embrace the convenience, speed, and sustainability of drone delivery today!
                                    Drone delivery is not just a service; it's the future. With our cutting-edge technology, we're bringing you closer to the world, one delivery at a time. Embrace the convenience, speed, and sustainability of drone delivery today!
                                    Drone delivery is not just a service; it's the future. With our cutting-edge technology, we're bringing you closer to the world, one delivery at a time. Embrace the convenience, speed, and sustainability of drone delivery today!
                                    Drone delivery is not just a service; it's the future. With our cutting-edge technology, we're bringing you closer to the world, one delivery at a time. Embrace the convenience, speed, and sustainability of drone delivery today!
                                    </div>
                                  </Col>
                                  
                                </Row>
                              </li>

                            </ul>
                          ) : null}
                        </TabPane>
                        <TabPane tabId="2">
                          {activeTab == 2 ? (
                            <ul className="tab-change-ul">
                            <li>
                            <Row>
                                  <Col md="5">
                                    <p><b className="font-bold">Features</b></p>
                                  </Col>
                                 
                                  <Col md="12">
                                    <div className="font-size mt-3">
                                    Drone delivery is not just a service; it's the future. With our cutting-edge technology, we're bringing you closer to the world, one delivery at a time. Embrace the convenience, speed, and sustainability of drone delivery today!
                                    Drone delivery is not just a service; it's the future. With our cutting-edge technology, we're bringing you closer to the world, one delivery at a time. Embrace the convenience, speed, and sustainability of drone delivery today!
                                    Drone delivery is not just a service; it's the future. With our cutting-edge technology, we're bringing you closer to the world, one delivery at a time. Embrace the convenience, speed, and sustainability of drone delivery today!
                                    Drone delivery is not just a service; it's the future. With our cutting-edge technology, we're bringing you closer to the world, one delivery at a time. Embrace the convenience, speed, and sustainability of drone delivery today!
                                    Drone delivery is not just a service; it's the future. With our cutting-edge technology, we're bringing you closer to the world, one delivery at a time. Embrace the convenience, speed, and sustainability of drone delivery today!
                                    </div>
                                  </Col>
                                  
                                </Row>
                            </li>

                           
                          
                            
                       </ul>
                          ) : null}
                        </TabPane>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </React.Fragment>
    )
}