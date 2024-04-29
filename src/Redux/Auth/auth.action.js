import axios from "axios";
import {base_url, api} from '../../config/api'
const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} = require("./auth.actionType");

export const loginUserAction = (loginData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${base_url}/auth/signin`,
      loginData.data
    );

    console.log('register succees', data);

    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.token,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error,
    });
  }
};

export const registerUserAction = (loginData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    console.log("Calling Register Endpoint....")
    const { data } = await axios.post(
      `${base_url}/auth/signup`,
      loginData.data
    );

    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }

    console.log("register success", data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data.token,
    });
  } catch (error) {
    console.log("Error Registering User: ", error)
    dispatch({
      type: REGISTER_FAILURE,
      payload: error,
    });
  }
};

export const getProfileAction = (jwt) => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });
  try {
    const { data } = await axios.get(`${base_url}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    console.log("userProfile------", data);

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAILURE,
      payload: error,
    });
  }
};

export const updateProfileAction = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    try {
      const { data } = await api.put(`${base_url}/api/users`,reqData);
      console.log("Update--Profile------", data);
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log('profile eror',error);
      
      dispatch({
        type: UPDATE_PROFILE_FAILURE,
        payload: error,
      });
    }
  };
  

//   3:27