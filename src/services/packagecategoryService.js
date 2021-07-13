
import http from "./httpService";
import {
  apiUrl
} from "../config.json";

const apiEndpoint = apiUrl + "api/packagecategory";

export function getAddPackageCategory(packagecategory) {
  return http.post(apiEndpoint+'/', {
    json: packagecategory
  });
}
export function getAllPackageCategory(packagecategory) {
  return http.post(apiEndpoint+'/all', {
    json: packagecategory
  });
}
export function getLoginPackageCategory(packagecategory) {
  const apiEndpointLogin = apiEndpoint+'/login';
  return http.post(apiEndpointLogin, {
    json: packagecategory
  });
}

export function getVerifyContactLoginPackageCategory(packagecategory) {
  const apiEndpointLogin = apiEndpoint+'/login';
  return http.post(apiEndpointLogin, {
    json: packagecategory
  });
}

export function register(packagecategory) {
  return http.post(apiEndpoint, {
    json: packagecategory
  });
}

