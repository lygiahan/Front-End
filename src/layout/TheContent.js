import React, { Suspense } from "react";
import {Switch,Route} from "react-router-dom";
import _routes from "../routes";

 function TheContent() {
   const loading={}
  return (
    <div>
      <Suspense fallback={loading}>
               <Switch>
                  {_routes.map((route, idx) => {
                     return (                     
                        <Route
                           key={idx}
                           path={route.path}
                           exact={route.exact}
                           name={route.name}
                           render={(props) => {                    
                                      return <route.component {...props}/>                                      
                              }
                           }
                        />
                     
                  );
                    
                  })}
               </Switch>
            </Suspense>
    </div>
  );
}

export default React.memo(TheContent)