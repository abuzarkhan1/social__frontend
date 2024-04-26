const { default: axios } = require("axios")
const { base_url } = require("../../config/api");
const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } = require("./auth.actionType");


export const loginUserAction=(loginData) => async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try {
        const {data} = await axios.post(`${base_url}/auth/signin`,loginData.data);

        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
            
        }

        dispatch({
            type:LOGIN_SUCCESS,payload:data.jwt
        })
    } catch (error) {
        dispatch({
            type:LOGIN_FAILURE,payload:error
        })
    }
}

export const registerUserAction=(loginData) => async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try {
        const {data} = await axios.post(`${base_url}/auth/signup`,loginData.data);

        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
            
        }

        console.log("register",data);
        dispatch({
            type:REGISTER_SUCCESS,payload:data.jwt
        })
    } catch (error) {
        dispatch({
            type:REGISTER_FAILURE,payload:error
        })
    }
}