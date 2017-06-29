import axios from 'axios';

// from authentication sever
const ROOT_URL = 'http://localhost:3090';


export function signinUser({email, password}) {
  // This is what redux-thunk do for us
  // return function is to get direct access to the dispath
  return function(dispatch) {
    // dispatch({ type: ... })

    // Submit email/password to the server (API server)
    axios.post(`${ROOT_URL}/signin`, { email, password });
                          // {email: email, password: password}


    // If request is good...
    // - Update state to indicate user is authenticated
    // - Save the JWT token
    // - redirect to the route '/feature'


    // If request is bad...
    // - Show an error to the user
  }

}
