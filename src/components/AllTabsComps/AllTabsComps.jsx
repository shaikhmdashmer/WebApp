import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Col, Row } from "react-bootstrap";
import "react-tabs/style/react-tabs.css";
import { MultiImagesDisplay } from "../MultiImagesDisplay/MultiImagesDisplay";
import { MultiPDFsDisplay } from "../MultiPDFsDisplay/MultiPDFsDisplay";
import { MultiHomeDisplay } from "../MultiHomeDisplay/MultiHomeDisplay";
import * as QueryString from "query-string";
import { useLocation, Redirect } from "react-router-dom";
import { VideoAffairsDisplay } from "../Common/VideoAffairsDisplay";
import { MultiCurrentAffairsDisplay } from "../../components/MultiCurrentAffairsDisplay/MultiCurrentAffairsDisplay";
import { MultiEminentProfessorsDisplay } from "../../components/Home/MultiEminentProfessorsDisplay/MultiEminentProfessorsDisplay";
import {
  getSelectImgData,
  getSelectPdfData,
  getSelectPptData,
  getSelectDocData,
  getSelectXlsData,
  getHomeLevelDetails,
  getSelectEventsAffairsData,
  getSelectVideoData,
  getSelectedCategoryLevel3,
  getRedirectLandingHome,
} from "../../state/selectors/categories";
import { MultiPPTsDisplay } from "../MultiPPTsDisplay/MultiPPTsDisplay";
import { MultiDOCsDisplay } from "../MultiDOCsDisplay/MultiDOCsDisplay";
import { MultiXLSsDisplay } from "../MultiXLSsDisplay/MultiXLSsDisplay";
import "./AllTabsComps.css";
import {
  setSelectedCategory,
  setSelectedCategoryLevel2,
  setSelectedCategoryLevel3,
  setRedirectLandingHome,
} from "../../state/actions/categories";

export const AllTabsComps = () => {
  const selectorCategoryLevel3 = useSelector(getSelectedCategoryLevel3);
  const selectorRedirectLandingHome = useSelector(getRedirectLandingHome);
  const dispatch = useDispatch();
  const params = QueryString.parse(useLocation().search);
  const selectorImgs = useSelector(getSelectImgData);
  const selectorPDFs = useSelector(getSelectPdfData);
  const selectorPPTs = useSelector(getSelectPptData);
  const selectorDocs = useSelector(getSelectDocData);
  const selectorXlss = useSelector(getSelectXlsData);
  const selectorVideos = useSelector(getSelectVideoData);
  const selectorEventsAffairs = useSelector(getSelectEventsAffairsData);
  const selectorHomeLevelDetails = useSelector(getHomeLevelDetails);
  useEffect(() => {
    // if (selectorImgs === undefined && !selectorRedirectLandingHome) {
    dispatch(setSelectedCategory(params.Category1));
    dispatch(setSelectedCategoryLevel2(params.Category2));
    dispatch(setSelectedCategoryLevel3(params.Category3));
    // dispatch(setRedirectLandingHome(true));
    // }
  }, [params.Category1, params.Category2, params.Category3]);
  return (
    <React.Fragment>
      {selectorImgs === undefined && <Redirect to="/home" />}
      {selectorCategoryLevel3 && selectorImgs && (
        <Tabs>
          <TabList className="TabsHeaderContainer">
            {selectorHomeLevelDetails &&
              selectorHomeLevelDetails.length > 0 && <Tab>Home</Tab>}
            {selectorImgs.length > 0 && <Tab>Photos</Tab>}
            {selectorVideos.length > 0 && <Tab>Videos</Tab>}
            {selectorPDFs.length > 0 && <Tab>PDF</Tab>}
            {selectorPPTs.length > 0 && <Tab>PPT</Tab>}
            {selectorDocs.length > 0 && <Tab>Documents</Tab>}
            {selectorXlss.length > 0 && <Tab>Spread Sheets</Tab>}
          </TabList>

          {selectorHomeLevelDetails && selectorHomeLevelDetails.length > 0 && (
            <TabPanel className="TabsContainerParent">
              {params.Category3 == 48 ? (
                <MultiEminentProfessorsDisplay />
              ) : (
                <MultiHomeDisplay />
              )}
            </TabPanel>
          )}
          {selectorImgs.length > 0 && (
            <TabPanel className="TabsContainerParent">
              <Row>
                <Col lg={8} className="colHome">
                  <MultiImagesDisplay />
                </Col>
                <Col lg={4} className="colHome">
                  <MultiCurrentAffairsDisplay
                    affairsData={selectorEventsAffairs}
                    title="Updates"
                  />
                </Col>
              </Row>
            </TabPanel>
          )}
          {selectorVideos.length > 0 && (
            <TabPanel>
              <Row>
                <Col lg={8} className="colHome">
                  <VideoAffairsDisplay />
                </Col>
                <Col lg={4} className="colHome">
                  <MultiCurrentAffairsDisplay
                    affairsData={selectorEventsAffairs}
                    title="Updates"
                  />
                </Col>
              </Row>
            </TabPanel>
          )}
          {selectorPDFs.length > 0 && (
            <TabPanel className="TabsContainerParent">
              <MultiPDFsDisplay />
            </TabPanel>
          )}
          {selectorPPTs.length > 0 && (
            <TabPanel className="TabsContainerParent">
              <MultiPPTsDisplay />
            </TabPanel>
          )}
          {selectorDocs.length > 0 && (
            <TabPanel className="TabsContainerParent">
              <MultiDOCsDisplay />
            </TabPanel>
          )}
          {selectorXlss.length > 0 && (
            <TabPanel className="TabsContainerParent">
              <MultiXLSsDisplay />
            </TabPanel>
          )}
          {selectorPPTs.length > 0 && (
            <TabPanel className="TabsContainerParent">
              <MultiPPTsDisplay />
            </TabPanel>
          )}
        </Tabs>
      )}
    </React.Fragment>
  );
};
