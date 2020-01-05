import { AsyncStorage } from 'react-native';
import { URL, USER_SIGN_UP } from '../Constants/actionCreators';
// eslint-disable-next-line max-len
// since we are sending an object to the backend(the user's form input), we need to pass our action an argument: user
export function userSignUp(user) {
  return function (dispatch) {
    return fetch(`${URL}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(
        (response) => response.json()
      )
      .then(
        (response) => {
          // define asynchronous function
          this._storeData = async () => {
            try {
              await AsyncStorage.setItem('loggedInUser', response);
            } catch (error) {
              // Error saving data
              console.log(error);
            }
          };
          // invoke
          this._storeData();
          dispatch({ type: USER_SIGN_UP, payload: response });
        }
      )
      .catch(
        (err) => console.error(err)
      );
  };
}

export default userSignUp;
