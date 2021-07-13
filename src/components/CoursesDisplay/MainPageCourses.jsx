import React from 'react';
import Banner from './Banner';
import DetailsWithBullets from './DetailsWithBullets';
import DetailsWithoutBullets from './DetailsWithoutBullets';
import Tittle_Heading from './Tittle_Heading';
import CivilImages from "../../img/CivilImages.png";





const MainPageCourses = () => {
    return (
        <div >
            <Banner image={CivilImages} title={"Computer Science & Engineering (BTECH)"} />
            <br />
            <DetailsWithoutBullets description=" Computer Science field has become one of the fastest growing segments of
                our economy which leads to huge demand for computer Engineering
                professionals for the development of faster Hardware components, New
                Communication System and Software. Computer tends to be engineering
                oriented especially when talks about software development and
                maintenance. The program is designed to provide the students with the
                foundation of discipline as well as opportunity for specialization." />
            <br />
            <br />
            <Tittle_Heading title={"ABOUT THE DEPARTMENT"} />
            <br />
            <DetailsWithBullets descriptionwithbullets="It has a tremendous scope in automobile engineering, cement industry," />
            <br />

            <Tittle_Heading title={"CAREER PROSPECT"} />
            <DetailsWithBullets descriptionwithbullets="It has a tremendous scope in automobile engineering, cement industry," />
            <br />
            <Tittle_Heading title={"OBJECTIVES"} />
            <DetailsWithBullets descriptionwithbullets="It has a tremendous scope in automobile engineering, cement industry," />
        </div>
    );
};

export default MainPageCourses;