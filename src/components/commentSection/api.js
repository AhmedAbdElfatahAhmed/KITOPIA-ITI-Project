import axios from "axios";

const baseURL = "http://localhost:3005/comments"
export const getComments = async () => {
  const {data}=  await axios.get(baseURL)
  return data
};

export const createComment = async (text, parentId = null) => {
  const {data}=await axios.post(baseURL,{
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  })
  return data
};

export const updateComment = async (text) => {
  const {data}=await axios.post(baseURL,{ text })
  return text ;

};

export const deleteComment = async (id) => {
  const {data}=await axios.delete(`${baseURL}/${id}`)
  return {};
};
