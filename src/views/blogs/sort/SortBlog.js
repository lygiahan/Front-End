import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortBlog } from "../../../redux/features/BlogSlice";
import { sortBlogs } from "../../../services/Blogs";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default function SortBlog() {
  const [data, setData] = useState({ sortBy: "" });
  const dispatch = useDispatch();
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSort = async (data) => {
    try {
      let res = await sortBlogs(data);
      dispatch(sortBlog(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex">
      <DropdownButton id="dropdown-item-button" title="Dropdown button">
        <Dropdown.Item as="button" onClick={() => onSort("asc")}>
          Mới nhất
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => onSort("desc")}>
          Cũ nhất
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
