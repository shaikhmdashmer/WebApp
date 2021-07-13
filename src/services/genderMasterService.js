import http from "./httpService";
import {
  apiUrl
} from "../config.json";

const apiEndpoint = apiUrl + "api/genderMaster";

export function getGenderMaster() {
  return http.get(apiEndpoint);
}
