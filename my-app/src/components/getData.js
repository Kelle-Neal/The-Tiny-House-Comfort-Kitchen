import axios from "axios";


async function getData(API) {
  let response = await axios.get(API);
  return response.data;
}

export default getData;