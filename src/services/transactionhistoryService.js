
import http from "./httpService";
import {
  apiUrl
} from "../config.json";

const apiEndpoint = apiUrl + "api/transactionhistory";

export function getTransactionHistory(transactionhistory) {
  return http.post(apiEndpoint+'/all', {
    json: transactionhistory
  });
}
// export function getLoginTransactionHistory(transactionhistory) {
//   const apiEndpointLogin = apiEndpoint+'/login';
//   return http.post(apiEndpointLogin, {
//     json: transactionhistory
//   });
// }

// export function getVerifyContactLoginTransactionHistory(transactionhistory) {
//   const apiEndpointLogin = apiEndpoint+'/login';
//   return http.post(apiEndpointLogin, {
//     json: transactionhistory
//   });
// }

// export function register(transactionhistory) {
//   return http.post(apiEndpoint, {
//     json: transactionhistory
//   });
// }

