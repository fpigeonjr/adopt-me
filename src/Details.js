import React from "react";

const Details = props => (
  <pre>
    <code>{JSON.stringify(props, null, 4)}</code>
  </pre>
);

export default Details;
