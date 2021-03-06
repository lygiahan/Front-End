import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListPagi } from "../../../redux/features/BlogSlice";
import { getListBlogPagi } from "../../../services/Blogs";
import ListBlogsItem from "./ListBlogsItem";

export default function ListBlogs() {
  const { listsPagi, _page, _limit } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  // GET List Blogs Pagination
  useEffect(() => {
    (async () => {
      try {
        let res = await getListBlogPagi(_page, _limit);
        dispatch(getListPagi(res.data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [_page]);

  return (
    <ul className="list-unstyled h-lists">
      {listsPagi.map((item) => {
        return <ListBlogsItem item={item} />;
      })}
    </ul>
  );
}
