import React from 'react';
import PropTypes from 'prop-types';

const WSButton = props => {
  const {
    name,
    onClickFunc,
  } = props;

  return (
    <div>
      <div style={{backgroundColor: '#24a4d8', borderRadius: 10, padding: 2, width: 250, margin: 20}} onClick={onClickFunc}>
        <p style={{display: 'flex', justifyContent: 'center'}}>{name}</p>
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
  name: '',
  containerStyle: {},
  buttonTextStyle: {},
};

export default WSButton;
