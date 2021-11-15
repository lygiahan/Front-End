import React from "react";
import moment from 'moment'
import { Link } from "react-router-dom";
 function ListBlogsItem({item}) {
  let { content, image, title, id,createdAt } = item;
     
  return (
     <Link to={`/detail-blog/${id}`}>
      <li key={id} className="media d-flex my-4 border h-lists-items" >
        <img src={image} className="mr-3" alt={title} />
        <div className="media-body p-3 w-100">
          <h5 className="mt-0 mb-1">{title}</h5>
          <p className="mt-0 mb-1">{moment(createdAt).format('DD/MM/YYYY')}</p>
          {content}
          <p className="text-end w-100">
             <i class="fa fa-pencil" style={{color:'red'}}></i>
             <Link to={`/update-blog/${id}`} className="btn btn-primary btn-sm">Sửa</Link>
          </p>
        </div>
         
      </li>
    </Link>
  );
}

export default React.memo(ListBlogsItem)
