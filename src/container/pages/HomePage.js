import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import { getLists } from "../../redux/features/BlogSlice";
import { getListBlogs } from "../../services/Blogs";
import FilterBlog from "../../views/blogs/filter/FilterBlog";
import ListBlogs from "../../views/blogs/list/ListBlogs";
import SortBlog from "../../views/blogs/sort/SortBlog";

export default function HomePage() {

  const dispatch = useDispatch()
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


  return (
    <main>
      <div className="h-blogs">
        <div className="row my-2">
          <div className="col-lg-4">
            <FilterBlog />
          </div>
          <div className="col-lg-4">
            <SortBlog />
          </div>
          <div className="col-lg-4 text-end">
            <button type="button" class="btn btn-primary">
              <Link to="/create-blog" className="text-white text-decoration-none">
                New Add
              </Link>
            </button>
          </div>
        </div>
        <ListBlogs />
      </div>
    </main>
  );
}
