const baseURL = "https://nike-node-api.vercel.app/api";
// const baseURL = "http://localhost:5000/api";

const callAPI = async (endpoint) => {
  return await fetch(baseURL + endpoint)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
};

export default callAPI;
