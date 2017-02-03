import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


// Create component
const Button = ({ onPress, children }) => {
  const { buttonStyle, buttonTextStyle } = Styles;
  return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={buttonTextStyle}>
          {children}
        </Text>
      </TouchableOpacity>
  );
};

const Styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  }
};
// Make the component publicly available
export { Button };
