import http from "./httpService";
import { apiUrl, subscriberRegistrationNo } from "../config.json";
import { Category, ContactlessOutlined } from "@material-ui/icons";

const apiEndpoint = apiUrl + "api/subscriber";
const apiEndpointCat = apiUrl + "api/subscriber/productcategory";

export function getAllSubscriber(subscriber) {
  return http.post(apiEndpoint + "/all", {
    json: subscriber,
  });
}
export function getMultipleLevelCategory(parentRegistrationId) {
  return http.post(apiEndpoint + "/multipleLevelCategory", {
    parentregistrationno: parentRegistrationId,
  });
}
export function getLoginSubscriber(subscriber) {
  const apiEndpointLogin = apiEndpoint + "/login";
  return http.post(apiEndpointLogin, {
    json: subscriber,
  });
}

export function getVerifyContactLoginSubscriber(subscriber) {
  const apiEndpointLogin = apiEndpoint + "/login";
  return http.post(apiEndpointLogin, {
    json: subscriber,
  });
}

export function register(subscriber) {
  return http.post(apiEndpoint, {
    json: subscriber,
  });
}

export function getProductCategories(ParentId) {
  return http.post(apiEndpointCat, {
    parentRegistrationNo: ParentId,
  });
}

export function getHomeDisplayProducts(ParentId) {
  return http.post(apiEndpoint + "/displayhomeproducts", {
    parentRegistrationNo: ParentId,
  });
}

export function getSendNotificationEmail(
  ParentId,
  templateCode,
  emailTo,
  nameTo,
  phoneTo,
  messageTo,
  countryTo,
  productTo
) {
  const apiEndpointProd = apiEndpoint + "/sendemail";
  return http.post(apiEndpointProd, {
    parentRegistrationNo: ParentId,
    templateCode: templateCode,
    emailTo: emailTo,
    nameTo: nameTo,
    phoneTo: phoneTo,
    messageTo: messageTo,
    countryTo: countryTo,
    productTo: productTo,
  });
}
export function getProducts(
  productcategoryId,
  registrationno,
  inputSearchText
) {
  const apiEndpointProd = apiUrl + "api/subscriber/products";
  return http.post(apiEndpointProd, {
    productcategoryId: productcategoryId,
    registrationno: registrationno,
    filtSearchText: inputSearchText,
  });
}
/// Employee Details related api
export function getMultipleFiles(fileType, cat1, cat2, cat3) {
  const apiEndpointProd = apiUrl + "api/getmultiplefiles";
  return http.post(apiEndpointProd, {
    registrationno: subscriberRegistrationNo,
    folderRoot: "Multpics",
    fileType: fileType,
    cat1: cat1,
    cat2: cat2,
    cat3: cat3,
  });
}
export function getAffairs(
  affairstypeId,
  registrationno,
  inputSearchText,
  category1,
  category2,
  category3
) {
  const apiEndpointProd = apiUrl + "api/subscriber/affairs";
  return http.post(apiEndpointProd, {
    affairstypeId: affairstypeId,
    registrationno: registrationno,
    filtSearchText: inputSearchText,
    selectedCategoryI: category1,
    selectedCategoryII: category2,
    selectedCategoryIII: category3,
  });
}
export function getEmployees(
  employeecategoryId,
  registrationno,
  inputSearchText
) {
  const apiEndpointProd = apiUrl + "api/subscriber/employees";
  return http.post(apiEndpointProd, {
    productcategoryId: employeecategoryId,
    registrationno: registrationno,
    filtSearchText: inputSearchText,
  });
}
export function getHomeLevelDetailsData(subscriber) {
  const apiEndpointProd = apiUrl + "api/subscriber/homeleveldetails";
  return http.post(apiEndpointProd, {
    json: subscriber,
  });
}
export function getMembership(registrationno) {
  const apiEndpointProd = apiUrl + "api/subscriber/membership";
  return http.post(apiEndpointProd, {
    registrationno: registrationno,
  });
}
export function getEmployeeCategories(ParentId) {
  return http.post(apiEndpointCat, {
    parentRegistrationNo: ParentId,
  });
}
