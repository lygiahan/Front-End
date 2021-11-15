import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import FilterBlog from "../../views/blogs/filter/FilterBlog";
import ListBlogs from "../../views/blogs/list/ListBlogs";
import SortBlog from "../../views/blogs/sort/SortBlog";

export default function HomePage() {

  return (
    <main className="h-main">
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
                  <Link to="/create-blog" className="text-white">Thêm Mới</Link>
               </button>
           </div>
          </div>
          <ListBlogs />
          <Pagination />
      </div>
    </main>
  );
}
