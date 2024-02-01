import axios from "axios";
const baseUrl = "http://localhost:3000/";

//To Get Roadmap Data
export const getInternsBatchData = async () => {
  return await axios.get(baseUrl + "internshipBatch");
};

// To Post Roadmap Data
export const addInternsBatch = async (internsBatchData) => {
  const url = baseUrl + "internshipBatch";
  return await axios.post(url, internsBatchData);
};

// Delete The Data
export const deleteInternsBatch = async (id) => {
  const url = baseUrl + "internshipBatch";
  console.log(url + "/" + id);
  return await axios.delete(url + "/" + id);
};

// Update the Data
export const updateRoadmap = async (id) => {
  const url = baseUrl + "roadMap";
  console.log(url + "/" + id);
  return await axios.get(url + "/" + id);
};
