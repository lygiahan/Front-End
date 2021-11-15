import CreateBlogPage from "./container/pages/CreateBlogPage";
import DetailBlogPage from "./container/pages/DetailBlogPage";
import HomePage from "./container/pages/HomePage";

var _routes = [
   // Home
    {
       path: "/",
       exact: true,
       name: "Home",
       component:HomePage

    },
    // Blogs
    {
       path: "/create-blog",
       exact: true,
       name: "Create Blog",
       component:CreateBlogPage
    },
    {
       path: "/detail-blog/:id",
       exact: true,
       name: "Detail",
       component:DetailBlogPage
    },
    {
      path: "/update-blog/:id",
      exact: true,
      name: "Detail",
      component:CreateBlogPage

   },
]


export default _routes;