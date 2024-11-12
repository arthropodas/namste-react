import React from "react";
import { useRouteError } from "react-router-dom";
function Error() {
  const route = useRouteError();
  return (
    <div>
      <h1>{route.statusText}</h1>
      <h1>{route.status}</h1>
  
    </div>
  );
}

export default Error;
