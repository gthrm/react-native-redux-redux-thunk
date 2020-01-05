import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './Reducers';
import SignUpScreen from './Screens/SignUpScreen';
// storeEnhancers make time travel possible without the app being
// aware it is happening. While it might not be super relevant to
// your React Native app, it is a valuable tool to use.
// eslint-disable-next-line no-undef
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// make sure to create your store outside of the component
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)));
function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <SignUpScreen />
      </SafeAreaView>
    </Provider>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    height: '100%'
  }
});
