import React from 'react';
import { View } from 'react-native';


// Create component
const CardSection = (props) => {
  return (
    <View style={Styles.cardSectionStyle}>
      {props.children}
    </View>
  );
};

const Styles = {
  cardSectionStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};
// Make the component publicly available
export { CardSection };
