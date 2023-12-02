import React from "react"

export default function AuthPage() {
    return (
        <div className="w-full h-screen bg-pink-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50">
            <div className="w-1/3 bg-orange-100">
            <div>POST SHARE</div>
            <div className=" flex flex-col bg-orange-50 space-y-3">
                <input type="text" placeholder="Username" className=""/>
                <input type="text" placeholder="Email" className=""/>
                <input type="text" placeholder="Password" className=""/>
            </div>
            <div className="cursor-pointer hover:bg-lime-400 w-full p-2 text-center bg-lime-100 text-dark rounded-md">Register</div>
            </div>
        </div>
    )
}