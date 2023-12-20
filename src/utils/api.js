import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyCAWezCrrbgNrAxtuNQSH7MQaVGQsM2fMw",
  cx: "444a06adbd5c245e2",
};

export const fetchDataApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
