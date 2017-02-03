import React from 'react';
import { View, ActivityIndicator } from 'react-native';


// Create component
const Spinner = ({ spinnerSize }) => {
  const { spinnerContainerStyle } = Styles;
    //Return som JSX
    return (
      <View style={spinnerContainerStyle}>
        <ActivityIndicator size={spinnerSize || 'large'} />
      </View>
    );
};

const Styles = {
  spinnerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

// Make the component publicly available
export { Spinner };
