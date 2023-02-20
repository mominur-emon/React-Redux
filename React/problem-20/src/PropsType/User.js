import React from "react";

import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

const User = (props) => {
  return (
    <div>
      <h1>{props.userName}</h1>
      <h3>{props.userId}</h3>
    </div>
  );
};

User.propTypes = {
  //key value
  userName: PropTypes.string,
  userId: PropTypes.number,
};

User.defaultProps = {
  userName: "default name",
  userId: 0,
};

export default User;
