import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { detailBlog } from "../../redux/features/BlogSlice";
import { getDetailBlogs } from "../../services/Blogs";
import moment from "moment";

export default function DetailBlogPage() {
  const { detail } = useSelector((state) => state.blogs);
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        let res = await getDetailBlogs(id);
        dispatch(detailBlog(res.data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="row p-3">
      <div className="col-lg-5">
        <img src={detail.image} className="w-100" alt={detail.title} />
      </div>
      <div className="col-lg-7">
        <div className="media-body p-3 w-100">
          <h5 className="mt-0 mb-1">{detail.title}</h5>
          <p className="mt-0 mb-1">
            {moment(detail.createdAt).format("DD/MM/YYYY")}
          </p>
          {detail.content}
        </div>
      </div>
    </div>
  );
}
