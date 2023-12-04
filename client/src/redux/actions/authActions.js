import axios from "axios"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const registerAction = (authData) => async (dispatch) => {

    try {
        const { data } = await axios
            .post("http://localhost:8000/register", authData)

        dispatch({
            type: "REGISTER", payload: data,
        })
    } catch (error) {
        console.log("error-->", error);
        alert(error)
    }
}

export const loginAction = (authData) => async (dispatch) => {

    try {
        const { data } = await axios
            .post("http://localhost:8000/login", authData)

        dispatch({
            type: "LOGIN", payload: data
        })
    } catch (error) {
        alert(error)
    }
}