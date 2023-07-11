import axios from "axios";

export function getData(callback) {
  axios
    .get("https://travel-1.tokodjbless.my.id/datas")
    .then((data) => callback(data.data.data))
    .catch((err) => console.log(err));
}
 
