import axios from "axios"
import { toast } from "react-toastify";

export const registerAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:8000/register", authData)
        dispatch({
            type: "REGISTER", payload: data
        })
    } catch (error) {
        console.log("error register -->", error.response?.data?.message);
        const errorMessage = String(error.response?.data?.message)
        toast(errorMessage, {
            position: "top-right",
            autoClose: 5000
        });
    }
}

export const loginAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:8000/login", authData)
        dispatch({
            type: "LOGIN", payload: data
        })
    } catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 5000
        });
    }
}