import React, { useState } from "react"
import { loginAction, registerAction } from "../../redux/actions/authActions"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function AuthPage() {
    const [signUp, setSignUp] = useState(true)
    const [authData, setAuthData] = useState({
        username:"", email: "", password: "", passwordConfirm: ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onChangeValue = (e) => {
        setAuthData ({...authData, [e.target.name]: e.target.value})
    }

    const authFunction = () => {
        if (signUp) {
            dispatch(registerAction(authData))
            navigate("/")
        } else {
            dispatch(loginAction(authData))
            navigate("/")
        }       
    }

    return (
        <div className="w-full h-screen bg-gray-100 flex items-center justify-center z-50">
            <div className="w-1/3 bg-white">
            <div className="text-2xl text-red-500 font-bold flex justify-center items-center pt-2">{signUp ? "REGISTER": "LOGIN"}</div>
            <div className=" flex flex-col bg-gray-100 mb-2">

                {signUp && 
                <input 
                value={authData.username} 
                name="username" 
                onChange={onChangeValue} 
                type="text" 
                placeholder="Username" 
                className="input-style"/>}

                <input 
                value={authData.email} 
                name="email" 
                onChange={onChangeValue} 
                type="text" 
                placeholder="Email" 
                className="input-style"/>

                <input 
                value={authData.password} 
                name="password" 
                onChange={onChangeValue} 
                type="text" 
                placeholder="Password" 
                className="input-style"/>

            {signUp && 
                <input 
                value={authData.passwordConfirm} 
                name="passwordConfirm" 
                onChange={onChangeValue} 
                type="text" 
                placeholder="Confirm password" 
                className="input-style"/>}
            </div>
            <div className="text-red-500 text-xs cursor-pointer my-2 text-center">
               {signUp ? <span  onClick = {()=>setSignUp(false)}>You have already registered? Click to login!</span> :
                <span onClick= {()=>setSignUp(true)}>Click to register!</span>}
            </div>
            <div onClick={authFunction} className="cursor-pointer hover:bg-lime-400 w-full p-2 text-center bg-lime-100 text-dark rounded-md">{signUp ? "Register": "Login"}</div>
            </div>
        </div>
    )
}