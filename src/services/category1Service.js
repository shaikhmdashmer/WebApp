import http from "./httpService";
import {
  apiUrl
} from "../config.json";

const apiEndpoint = apiUrl + "api/category1";

function category1Url(id) {
  return `${apiEndpoint}/${id}`;
}

export function getAllCategory1(parentRegistrationNo) {
  return http.post(apiEndpoint + "/getAll", {
    parentRegistrationNo: parentRegistrationNo
  });
}

export function getCategory1(category1Id) {
  return http.get(category1Url(category1Id));
}

export function saveCategory1(category1) {
  if (category1._id) {
    const body = { ...category1 };
    delete body._id;
    return http.put(category1Url(category1._id), body);
  }

  return http.post(apiEndpoint, category1);
}

export function deleteCategory1(category1Id) {
  return http.delete(category1Url(category1Id));
}