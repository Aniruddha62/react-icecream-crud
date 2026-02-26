import React, { useState, usestate } from 'react'
import '../styles/AdminLogin.css' 
export default function AdminLogin() {
    let [username,setUsername] = useState("");
    console.log(username);
    let [password,setPassword] = useState("");
    console.log(password);
    function login(){
        let val = admin.filter((x)=>
        { return x.email == username && x.password == password        })
        if(val.length > 0){
            alert("Login Successfull")
        }
        else{
            alert("Invalid Credentials")
        }
       // if(username == "jspider" && password == "1234"){
        //    alert("Admin Logged")
        //}
        //else{
          //  alert("Invalid Username or password")
        //}
    }
    return (
        <div className='AdminLogin'>
            <form action="">
                <label htmlFor="">
                    username : 
                </label>
                <input type="text" value= {username} onChange=
            </form>
        </div>
    )
}