import React from 'react';
import { View } from 'react-native';


// Create component
const Card = (props) => {
  return (
    <View style={Styles.cardStyle}>
      {props.children}
    </View>
  );
};

const Styles = {
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 10,
    marginRight: 5,
    marginBottom: 10,
    marginLeft: 5
  }

};
// Make the component publicly available
export { Card };
