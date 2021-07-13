import http from "./httpService";
import {
  apiUrl
} from "../config.json";

const apiEndpoint = apiUrl + "api/categorynamelevel3";

export function getCategorynamelevel3() {
  return http.get(apiEndpoint);
}

export function getCategorynamelevel3get(categorynamelevel2) {
  return http.post(`${apiEndpoint}/get`,
  {
    categorynamelevel2 : categorynamelevel2
  });
}
