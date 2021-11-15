import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLists,
  onChangePagePagination,
} from "../../redux/features/BlogSlice";
import { getListBlogs } from "../../services/Blogs";

export default function Pagination() {
  const { lists, _page } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  // Get List Blogs
  useEffect(() => {
    (async () => {
      try {
        let res = await getListBlogs();
        dispatch(getLists(res.data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const listPagination = [];
  for (let i = 0; i < Math.ceil(lists.length / 10); ++i) {
    listPagination.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li
          className={`page-item ${_page === 1 ? "disabled" : ""}`}
          onClick={() => dispatch(onChangePagePagination(1))}
        >
          <a className="page-link">
            <span>&laquo;</span>
          </a>
        </li>
        {listPagination.map((item, i) => {
          return (
            <li
              className="page-item"
              key={i}
              onClick={() => dispatch(onChangePagePagination(i + 1))}
            >
              <a className="page-link cursor-pointer">{i + 1}</a>
            </li>
          );
        })}

        <li
          className={`page-item ${
            listPagination.length === _page ? "disabled" : ""
          }`}
          onClick={() =>
            dispatch(onChangePagePagination(listPagination.length))
          }
        >
          <a className="page-link">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
