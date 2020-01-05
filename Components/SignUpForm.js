import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { userSignUp } from '../Actions/auth';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: ''
    };
  }

  handleSubmit = () => {
    const {
      email,
      name,
      password
    } = this.state;
    if (email && name && password) {
      const user = _.clone(this.state);
      console.log(user);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Sign Up!</Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Email"
            onChangeText={(email) => this.setState({ email })}
            style={styles.input}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Name"
            onChangeText={(name) => this.setState({ name })}
            style={styles.input}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            onChangeText={(password) => this.setState({ password })}
            style={styles.input}
            secureTextEntry
          />
          <Button title="Submit" onPress={this.handleSubmit} />
        </View>
      </SafeAreaView>
    );
  }
}

const mdp = (dispatch) => ({
  signUpUser: (data) => dispatch(userSignUp(data))
});

export default connect(null, mdp)(SignUpForm);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    alignItems: 'center',
    width: '100%'
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    width: '80%'
  }
});
