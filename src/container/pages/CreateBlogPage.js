import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { toast } from "react-toastify";
import { editBlogs } from "../../services/Blogs";

export default function CreateBlogPage() {
  const { get: _get_nesting } = require("lodash");
  let { id } = useParams();
  let ini_state = {
    id: "",
    title: "",
    image: "",
    content: "",
  };
  const [data, setData] = useState(ini_state);
  const location = useLocation();
  const getPath = location.pathname;
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (getPath.includes("update-blog")) {
      setUpdate(true);
      editBlog(id);
    }
  }, [id]);

  const editBlog = async (id) => {
    try {
      let res = await editBlogs(id);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    let formData = new FormData();
    formData.append("id", data.id);
    formData.append("title", data.title);
    formData.append("content", data.content);
    try {
      let res = await editBlogs(id, formData);
      if (res.data.success === false) {
        toast.error(`⚠ ${res.data.message}`);
      } else {
        if (update) {
          toast.success("✔ Sửa thành công", {
            position: "top-center",
          });
        } else {
          toast.success("✔ Thêm thành công", {
            position: "top-center",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-blog my-4">
      <div className="row">
        <div className="col-lg-12">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Tên tiêu đề
            </label>
            <input
              type="text"
              name="title"
              class="form-control"
              placeholder="Vui lòng nhập"
              onChange={onChange}
              value={_get_nesting(data, "title")}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Nội dung
            </label>
            <textarea
              class="form-control"
              name="content"
              rows="3"
              value={_get_nesting(data, "content")}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="col-lg-12 text-end">
          <button className="btn btn-primary" onClick={onSubmit}>
            Lưu lại
          </button>
        </div>
      </div>
    </div>
  );
}
