import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TheHeader from "./container/header/TheHeader";

const HomePage = React.lazy(() => import("./container/pages/HomePage"));
const CreateBlogPage = React.lazy(() =>
  import("./container/pages/CreateBlogPage")
);
const DetailBlogPage = React.lazy(() =>
  import("./container/pages/DetailBlogPage")
);

function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div>...</div>
    </div>
  );
  return (
    <>
      <Router>
        <div className="container">
          <TheHeader />
          <React.Suspense fallback={loading}>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/create-blog" component={CreateBlogPage}></Route>
            <Route
              exact
              path="/detail-blog/:id"
              component={DetailBlogPage}
            ></Route>
            <Route
              exact
              path="/update-blog/:id"
              component={CreateBlogPage}
            ></Route>
          </React.Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
