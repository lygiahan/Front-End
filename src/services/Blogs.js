import { axiosClient } from "../config";

export const getListBlogs = () => {
  return axiosClient.get("blogs");
};

export const getDetailBlogs = (id) => {
  return axiosClient.get(`blogs/${id}`);
};

export const postBlogSer = (formData) => {
  return axiosClient.post("blogs",formData);
};


export const editBlogs = (id) => {
  return axiosClient.put(`blogs/${id}`);
};

export const updateBlogs = (id,data) => {
  return axiosClient.put(`blogs/${id}`,data);
};

export const getListBlogPagi = (page, limit) => {
  return axiosClient.get(`blogs?page=${page}&limit=${limit}`);
};

export const searchBlogs = (search) => {
  return axiosClient.get(`blogs?search=${search}`);
};

export const filterBlogs = (filter) => {
  return axiosClient.get(`blogs?filter=${filter}`);
};

export const sortBlogs = (createdAt) => {
  return axiosClient.get(`blogs?sortBy=${createdAt}&order=desc`);
};




