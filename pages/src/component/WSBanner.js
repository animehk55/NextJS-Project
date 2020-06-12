import React from "react";
import PropTypes from "prop-types";

const WSButton = (props) => {
  const {
    image,
    onClickFunc,
  } = props;

  return (
    <div>
      <div onClick={onClickFunc}>
        <img
          style={{ borderRadius: 10, padding: 1, height: 500, width: 1330 }}
          src={image}
          alt="my image"
        />
      </div>
    </div>
  );
};

WSButton.propTypes = {
  name: PropTypes.string,
  onButtonPress: PropTypes.func,
  containerStyle: PropTypes.object,
  buttonTextStyle: PropTypes.object,
};

WSButton.defaultProps = {
  name: "",
  containerStyle: {},
  buttonTextStyle: {},
};

export default WSButton;
