import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  CardColumns,
  Col,
  Row,
  Container,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MultiSelect from "react-multi-select-component";
import { CountryDropdown } from "react-country-region-selector";
import "../Home/Home.style.css";
import { getAllProducts } from "../../state/selectors/products";
import RoomIcon from "@material-ui/icons/Room";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import { useSelector } from "react-redux";
import {
  getSendNotificationEmail,
  getProducts,
} from "../../services/subscriberService";
import { subscriberRegistrationNo } from "../../config.json";

export const GetInTouch = (props) => {
  const [emailTo, setEmailTo] = useState("");
  const [nameTo, setNameTo] = useState("");
  const [phoneTo, setPoneTo] = useState("");
  const [countryTo, setCountryTo] = useState([]);
  // const [productTo, setProductTo] = useState([]);
  const [optionsProducts, setOptionsProducts] = useState([
    { label: "Packaging Films", value: "packagingfilms" },
  ]);
  const [messageTo, setMessageTo] = useState("");
  const [notificationStatus, setNotificationStatus] = useState(false);
  // const filtProducts = useSelector(getAllProducts);

  const getAllProductsUI = async () => {
    const result = await getProducts("", subscriberRegistrationNo, "");
    if (result) {
      const data = result.data[0];
      const arrData = [];

      data &&
        data.forEach((element) => {
          element["label"] = element["name"].replace(/&amp;/g, "&");
          element["value"] = element["id"];
          arrData.push(element);
        });

      setOptionsProducts(arrData);
    }
  };

  // const formatMailProductsList = (selectedProducts) => {
  //   let prodList = [];
  //   selectedProducts.forEach((element) => {
  //     prodList.push(element.label);
  //   });
  //   return prodList.join().replace(/,/g, ", ");
  // };
  const sendNotificationEmailUI = async () => {
    if (emailTo !== "") {
      const prodToList = "";
      const result = await getSendNotificationEmail(
        subscriberRegistrationNo,
        "ContactInfoCustomer",
        emailTo,
        nameTo,
        phoneTo,
        messageTo,
        countryTo,
        prodToList
      );
      const resultInfoLeads = await getSendNotificationEmail(
        subscriberRegistrationNo,
        "ContactInfoLeads",
        emailTo,
        nameTo,
        phoneTo,
        messageTo,
        countryTo,
        prodToList
      );
      if (result) {
        setNotificationStatus(true);
        console.log("Successfully send email to customer. Thank you.");
      }
      if (resultInfoLeads) {
        console.log("Successfully send email to respective admin. Thank you.");
      }
    }
  };
  useEffect(() => {
    getAllProductsUI();
  }, []);
  return (
    <React.Fragment>
      {notificationStatus ? (
        <Container>
          <div class="titleContactInfo">
            Thanks for contacting to us. Our sales team will reach out to you
            soon...
          </div>
        </Container>
      ) : (
        <Container className="get-in-touch-top-padding">
          <Row>
            <Col md="6" lg="6">
              <p className="contact-p">
                Please enter your question, We will answers within three hours
                on working days. Queries requiring extensive research may take
                longer and will be answered as soon as possible.
              </p>

              <div className="contact-content clearfix">
                <RoomIcon className="icon" />

                <div className="contact-text">
                  <h4>Address</h4>
                  <p>Contact:#16-4-1,</p>
                  <p>Subedar Ameer Ali Khan Road,</p>
                  <p>New Malakpet Hyderabad – 500024</p>
                </div>
              </div>

              <div className="contact-content clearfix">
                <PhoneAndroidIcon className="icon" />

                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>040-24561118</p>
                  <p>+91 9849650796</p>
                  <p>+91 9885360757</p>
                  <p>+91 9848058830</p>
                </div>
              </div>

              <div className="contact-content clearfix">
                <EmailIcon className="icon" />

                <div className="contact-text">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@nsakcet.ac.in">info@nsakcet.ac.in</a>
                  </p>
                  <p>
                    <a href="nsakcet@gmail.com">nsakcet@gmail.com</a>
                  </p>
                </div>
              </div>
            </Col>

            <Col md="6" lg="6">
              <div className="contact-area mb-40">
                <div className="contact">
                  <Form.Group>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Name"
                      onChange={(e) => setNameTo(e.target.value)}
                    />
                    {/* <p class="help-block text-danger"></p> */}
                    {/* <MultiSelect
                      options={optionsProducts}
                      value={productTo}
                      onChange={setProductTo}
                      labelledBy={"Select Product"}
                      disableSearch={true}
                      overrideStrings={{
                        selectSomeItems: "Select Products",
                        allItemsAreSelected: "All Products are selected",
                        selectAll: "Select All Products",
                        search: "Search",
                        clearSearch: "Clear Search",
                      }}
                    /> */}
                    <p className="help-block text-danger"></p>
                    <Form.Control
                      size="lg"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmailTo(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                    <Form.Control
                      size="lg"
                      type="tel"
                      placeholder="Phone"
                      onChange={(e) => setPoneTo(e.target.value)}
                    />

                    <p className="help-block text-danger"></p>
                    <CountryDropdown
                      value={countryTo}
                      onChange={(e) => setCountryTo(e)}
                    />
                    <p className="help-block text-danger"></p>

                    <p className="help-block text-danger"></p>
                    <Form.Control
                      as="textarea"
                      rows={10}
                      placeholder="Message"
                      onChange={(e) => setMessageTo(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                    <div className=" ">
                      <a
                        href="#"
                        className="btn-default  btn3"
                        onClick={() => sendNotificationEmailUI()}
                      >
                        SEND MESSAGE
                      </a>
                    </div>
                  </Form.Group>

                  <form
                    name="sentMessage"
                    id="contactForm"
                    novalidate=""
                  ></form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </React.Fragment>
  );
};
