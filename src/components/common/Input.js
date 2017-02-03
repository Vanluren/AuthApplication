import React from 'react';
import { View, Text, TextInput } from 'react-native';


const Input = ({ placeholder, label, value, onChangeText, secureTextEntry }) => {
    const { inputContainerStyle,
            labelTextStyle,
            textInputStyle } = Styles;

    //Return som JSX
    return (
      <View style={inputContainerStyle}>
         <Text style={labelTextStyle}>
           {label}
         </Text>
         <TextInput
           style={textInputStyle}
           autoCorrect={false}
           placeholder={placeholder}
           secureTextEntry={secureTextEntry}
           value={value}
           onChangeText={onChangeText}
         />
      </View>
    );
};

const Styles = {
  inputContainerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  textInputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};
// Make the component publicly available
export { Input };
