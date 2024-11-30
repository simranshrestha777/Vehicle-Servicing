"use client";

import { Button,  TextField } from "@mui/material";
import { useState } from "react";
import { login } from "../util/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  
  const router =useRouter();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        console.log("My data:",loginData);
        const response =await login(loginData);
        console.log(response);
        
        if (response.Token){
          router.push("/")
        }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again later.");
    }
  };
  return (
    <div style={{ textAlign: "center", marginTop: "100px", color:"#fff"}}>
    <h2>Login</h2>
    <div style={{ marginTop: "20px" }}>
     
     
         <div style={{ marginTop: "20px" }}>
       
          <TextField
            fullWidth
            label="Username"
            color="secondary"
            variant="outlined"
            size="small"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            style={{ marginBottom: "10px", width: "300px" }}
            focused
           />
      
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            fullWidth
            label="Password"
            color="secondary"
            variant="outlined"
            type="password"
            size="small"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            focused
            style={{ marginBottom: "10px", width: "300px" }}
          />
          </div>
       
        
        <Button
            variant="contained"
            color="secondary"
            size="small"
            fullWidth={false}
            onClick={handleSubmit}
            style={{
              backgroundColor: "#42006M",
               color:"#fff",
              marginTop: "20px",
              padding: "10px 20px",
            }}
            >
            Login
            
          </Button>
      
      
    </div>
    </div>
  );
}