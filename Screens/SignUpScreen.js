import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SignUpForm from '../Components/SignUpForm';

const SignUpScreen = () => (
  <SafeAreaView style={styles.container}>
    <SignUpForm />
  </SafeAreaView>
);

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
});
