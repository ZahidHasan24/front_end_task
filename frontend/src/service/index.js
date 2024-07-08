import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const endpoint = {
  post: async (url, data = {}) => {
    try {
      let res = await instance.post(url, data);
      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  },
};

const Chat = {
  grumpy: (data) => endpoint.post("/chat/grumpy", data),
  poetic: (data) => endpoint.post("/chat/poetic", data),
};

const Auth = {
  login: (data) => endpoint.post("/login", data),
};

const apiEndpoint = {
  Chat,
  Auth
};

export default apiEndpoint;
