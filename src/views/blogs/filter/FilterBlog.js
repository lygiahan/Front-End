import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBlog } from "../../../redux/features/BlogSlice";
import { filterBlogs } from "../../../services/Blogs";

export default function FilterBlog() {
  const { lists } = useSelector((state) => state.blogs);
  const dispatch = useDispatch()
  const [data, setData] = useState({ filter: "" });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onFilter = async () => {
    try {
      let res = await filterBlogs(data.filter);
          dispatch(filterBlog(res.data))
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex">
      <select
        className="form-select w-50 mr-3"
        name="filter"
        onChange={onChange}
      >
        <option>Vui lòng chọn</option>
        {lists.map((item) => {
          return <option value={item.title}>{item.title}</option>;
        })}
      </select>
      <button className="btn btn-primary ml-3" onClick={onFilter}>
        Filter
      </button>
    </div>
  );
}
