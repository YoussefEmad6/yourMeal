import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

import React from "react";

const Error = () => {
  return (
    <div>
      Error
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </div>
  );
};

export default Error;
