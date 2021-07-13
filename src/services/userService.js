import http from "./httpService";
import { apiUrl } from "../config.json";
import axios from "axios";
// import PostBox from "components/dashboard/default/PostBoxes";

const apiEndpoint = apiUrl + "api/userlogin";

export function register(user) {
  return http.post(apiEndpoint, {
    registrationno: user.registrationno,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    contact: user.contact,
    passwordsalt: user.passwordsalt,
    categoryid: user.categoryid,
    sociallinked: user.sociallinked,
  });
}

export function getUserInfo(user) {
  return http.post(apiEndpoint + "/login", {
    json: user,
  });
}

export function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
    c
  ) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

export async function uploadFiles(file, req) {
  const apiEndpoint = apiUrl + "api/uploadfiles";
  let fd = new FormData();
  fd.append("file", file, `${req.registrationno}_profile.webp`);
  fd.append("name", req.registrationno);
  axios({
    url: apiEndpoint,
    method: "Post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: fd,
    onUploadProgress: (progressEvent) => {
      console.log(
        `Progress Upload : ${Math.round(
          (progressEvent.loaded / progressEvent.total) * 100
        )} %`
      );
    },
  }).then(
    (res) => {
      return res;
    },
    (err) => {
      return err;
    }
  );

  // axios.post(apiEndpoint, fd)
  // .then(res=>{
  //   console.log(res);
  //   return res;
  // });

  //  http.post(apiEndpoint, {data:fd}).
  //  then(res=>{
  //    console.log(res);
  //  }
  //   );
  // return await http.post(apiEndpoint, {
  //     data: bodyFormData,
  //     config: {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     }
  //   }
  // );
}
