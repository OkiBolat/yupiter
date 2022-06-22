import axios from "axios";

const instance = axios.create({
  baseURL: 'https://6118e8a19bcfb40017168953.mockapi.io/',
})

export default instance