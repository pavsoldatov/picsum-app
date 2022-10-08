import axios from "axios";

const picsumInstance = axios.create({
  baseURL: "https://picsum.photos/",
  timeout: 1000,
});

export const getData = async (page = 1, limit = 9) => {
  const response = await picsumInstance.get(`/v2/list?page=${page}&limit=${limit}`);
  return response.data;
};
