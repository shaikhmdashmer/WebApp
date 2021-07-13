import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { imagesRepoUrl } from "../../../config.json";
import { getEmployees } from "../../../services/subscriberService";
import { subscriberRegistrationNo } from "../../../config.json";
import { setSelectedCategory } from "../../../state/actions/categories";
import "./IDCardCarouselDisplay.css";

export const IDCardCarouselDisplay = () => {
  const dispatch = useDispatch();
  const [employeesData, setEmployeesData] = useState([]);
  const getAllEmployeesUI = async () => {
    const result = await getEmployees(216, subscriberRegistrationNo, "");
    if (result) {
      const data = result.data[0];
      setEmployeesData([...data]);
    }
  };
  const handleEminentProfessors = () => {
    dispatch(setSelectedCategory("48"));
  };
  useEffect(() => {
    getAllEmployeesUI();
  }, []);
  return (
    <div className="place-IdCard-comp">
      <Carousel
        className="professor-carousel"
        autoPlay
        infiniteLoop
        showStatus={false}
      >
        {employeesData &&
          employeesData.map((item) => {
            return (
              <React.Fragment>
                <div className="prof-title-comp slider-overlay-carousel-comp">
                  <Link
                    to={`homecommon?Category1=40&Category2=41&Category3=48`}
                    onClick={handleEminentProfessors}
                  >{`${item.DeptName}`}</Link>
                </div>
                <img
                  className="img-card-prof imgThubnailRoll"
                  src={`${imagesRepoUrl}${item.employeeThumbnail}`}
                />
                <Link
                  to={`homecommon?Category1=40&Category2=41&Category3=48`}
                  className="prof-title slider-overlay-carousel"
                  onClick={handleEminentProfessors}
                >
                  {`${item.Prefix} ${item.FirstName} ${item.LastName}`}
                </Link>
                <br />
              </React.Fragment>
            );
          })}
      </Carousel>
    </div>
  );
};
