import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { searchBlogs } from "../../services/Blogs";
import { useDispatch } from "react-redux";
import { searchBlog } from "../../redux/features/BlogSlice";

export default function TheHeader() {
  const dispatch = useDispatch();
  const history = useHistory();
  let ini_state = {
    search: "",
  };

  const [data, setData] = useState(ini_state);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSearch = async (value) => {
    try {
      let res = await searchBlogs(value);
      dispatch(searchBlog(res.data));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/">
        GSOFT
      </Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only"></span>
            </Link>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <input
          class="form-control me-2"
          name="search"
          onChange={onChange}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          class="btn btn-outline-success"
          type="submit"
          onClick={() => onSearch(data.search)}
        >
          Search
        </button>
      </div>
    </nav>
  );
}
