import React from "react";
import PropTypes from "prop-types";

const WSButton = (props) => {
  const {
    leftHeadingLine1,
    leftHeadingLine2,
    leftHeadingLine3,
    leftHeadingLine4,
    centerHeadingLine1,
    centerHeadingLine2,
    centerHeadingLine3,
    centerHeadingLine4,
    rightHeadingLine1,
    rightHeadingLine2,
    rightHeadingLine3,
    rightHeadingLine4,
    logo2,
    logo3,
    logo1,
  } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 0,
        backgroundColor: "black",
        paddingBottom: 30
      }}
    >
      <div style={{ marginLeft: 40 }}>
        <p style={{ color: "#87ceeb", fontWeight: "bolder", fontSize: 20 }}>
          {leftHeadingLine1}
        </p>
        <p style={{ color: "white" }}>{leftHeadingLine2}</p>
        <p style={{ color: "white" }}>{leftHeadingLine3}</p>
        <p style={{ color: "white" }}>{leftHeadingLine4}</p>
      </div>
      <div style={{ marginLeft: 40 }}>
        <p style={{ color: "#87ceeb", fontWeight: "bolder", fontSize: 20 }}>
          {centerHeadingLine1}
        </p>
        <p style={{ color: "white" }}>{centerHeadingLine2}</p>

        <p style={{ color: "white" }}>{centerHeadingLine3}</p>

        <p style={{ color: "white" }}>{centerHeadingLine4}</p>
        <div>

        <img style={{borderRadius: 10, paddingLeft: 5, height: 20, width: 20}} src={logo1} alt="my image" />
        <img style={{borderRadius: 10, paddingLeft: 5, height: 20, width: 20}} src={logo2} alt="my image" />
        <img style={{borderRadius: 10, paddingLeft: 5, height: 20, width: 20}} src={logo3} alt="my image" />


        </div>
      </div>
      <div style={{ marginRight: 40 }}>
        <p style={{ color: "#87ceeb", fontWeight: "bolder", fontSize: 20 }}>
          {rightHeadingLine1}
        </p>
        <p style={{ color: "white" }}>{rightHeadingLine2}</p>
        <p style={{ color: "white" }}>{rightHeadingLine3}</p>
        <p style={{ color: "white" }}>{rightHeadingLine4}</p>
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
