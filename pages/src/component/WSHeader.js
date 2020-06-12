import React from "react";
import PropTypes from "prop-types";

const WSButton = (props) => {
  const { name, onClickFunc } = props;

  return (
    <div>
      <div
        style={{ backgroundColor: "#87ceeb", borderRadius: 10, padding: 2 }}
        onClick={onClickFunc}
      >
        <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'flex-end'}}>
          <p style={{ paddingRight: 30}}>{"About"}</p>
          <p style={{ paddingRight: 30}}>{"ContactUs"}</p>
        </div>
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
