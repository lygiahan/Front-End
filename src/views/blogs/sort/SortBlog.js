import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { sortBlog } from '../../../redux/features/BlogSlice';
import { sortBlogs } from '../../../services/Blogs';

export default function SortBlog() {
    const [data, setData] = useState({ sortBy: "" });
    const dispatch = useDispatch()
    const onChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  
    const onSort = async () => {
      try {
        let res = await sortBlogs(data.filter);
           dispatch(sortBlog(res.data))
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div className="d-flex">
        <input type="date" name="sortBy" onChange={onChange}/>
        <button className="btn btn-primary ml-3" onClick={onSort}>
          Sort
        </button>
      </div>
    )
}
