import { axiosClient } from "../config";

export const getListBlogs = () => {
  return axiosClient.get("blogs");
};

export const getDetailBlogs = (id) => {
  return axiosClient.get(`blogs/${id}`);
};

export const postBlogSer = (formData) => {
  return axiosClient.post("blogs", formData);
};

export const editBlogs = (id, formData) => {
  return axiosClient.put(`blogs/${id}`, formData);
};

export const getListBlogPagi = (page, limit) => {
  return axiosClient.get(`blogs?page=${page}&limit=${limit}`);
};

export const searchBlogs = (search) => {
  return axiosClient.get(`blogs?search=${search}`);
};

export const filterBlogs = (data) => {
  return axiosClient.get(
    `blogs?${data.filter ? `filter=${data.filter}` : ``}&${
      data.search ? `search=${data.search}` : ``
    }`
  );
};

export const sortBlogs = (data) => {
  return axiosClient.get(
    `blogs?sortBy=createdAt&order=${data}&page=1&limit=10`
  );
};
