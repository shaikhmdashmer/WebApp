import http from "./httpService";
import {
  apiUrl
} from "../config.json";

const apiEndpoint = apiUrl + "api/categorynamelevel2";

export function getCategorynamelevel2() {
  return http.get(apiEndpoint);
}
