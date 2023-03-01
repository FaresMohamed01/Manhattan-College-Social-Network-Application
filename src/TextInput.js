import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const LogInInput = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');


  return (
    <SafeAreaView style={styles.box}>
      <TextInput
        style={styles.inputTop}
        onChangeText={onChangeText}
        placeholder="Enter your email address"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter your password"
        keyboardType="default"
        verticalAlign='middle'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderWidth: 3,
    padding: 10,
    width:275,
    borderRadius:10
  },
  inputTop: {
    margin: 10,
    borderWidth: 3,
    padding: 10,
    width:275,
    borderRadius:10
  },
  box:{
    padding:40
  }
  


});

export default LogInInput;