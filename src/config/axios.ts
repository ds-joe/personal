import ax from "axios";

const axios = ax.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default axios;
