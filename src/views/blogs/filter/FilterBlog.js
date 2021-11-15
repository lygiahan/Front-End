import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBlog } from "../../../redux/features/BlogSlice";
import { filterBlogs } from "../../../services/Blogs";

export default function FilterBlog() {
  const { lists } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const [dataList, setDataList] = useState({});

  const onChange = (e) => {
    setDataList({ ...dataList, [e.target.name]: e.target.value });
  };

  const onFilter = async () => {
    try {
      let res = await filterBlogs(dataList);
      dispatch(filterBlog(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex">
      <input type="text" name="search" onChange={onChange} />
      <select
        className="form-select w-50 mr-3"
        name="filter"
        onChange={onChange}
      >
        <option value="">Vui lòng chọn</option>
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
