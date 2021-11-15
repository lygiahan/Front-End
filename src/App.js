import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TheLayout from "./layout/TheLayout";

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
          <React.Suspense fallback={loading}>
                <Route 
                  path="/" 
                  name="Home"
                  render={(props)=><TheLayout {...props}/>}></Route>
          </React.Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
