
import React,{ useState, useHistory } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import cookies from "react-cookies";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { loginUser } from "../ActionCreators/userCreators";
import Apis, { endpoints } from "../config/Apis";
import { useNavigate } from "react-router-dom";

export  default function Login(props) {
	const [username, setUsername] = useState()
  const [password, setPassword] = useState()  
  const nav = useNavigate();
  const [err, setErr] = useState("");
    // const dispatch = useDispatch()
    // const history = useHistory()

    const login = async (event) => {
	    event.preventDefault()
	
	    try{
          let info = await Apis.get(endpoints['oauth2-info'])
          let res = await Apis.post(endpoints['login'], {
            "client_id": info.data.client_id,
            "client_secret": info.data.client_secret,
            "username": username,
            "password": password,
            "grant_type": "password"
          })

          localStorage.setItem("access_token", res.data.access_token)
          // cookies.save("access_token", res.data.access_token)

          let user = await Apis.get(endpoints['current-user'], {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("access_token")}`

            }
          })

          

          localStorage.setItem("user", user.data)
          console.log(localStorage.getItem("user"))
          nav("/")
          // cookies.save("user", user.data)

      } catch(err) {
          setErr("Sai tài khoản hoặc mật khẩu !!!!");
      }
   }

   if (localStorage.getItem("user") != null) return nav("/");

return (
    <>
    <h1 className="text-center text-danger">DANG NHAP</h1>
    <div
        className="nav-item me-auto"
        style={{
          textDecoration: "inherit",
          color: "red",
          textAlign: "center",
          marginBottom: "5px",
          backgroundColor: "#f2dede",
          border: "1px solid #ebccd1",
          borderRadius: "5px",
        }}
      >
        {err}
      </div>
    <Form  onSubmit={login}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control 
            type="text"
            placeholder="Username"  
            value={username}  
            onChange={(event) => setUsername(event.target.value)}/>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
            type="password"  
            placeholder="Password"  
            value={password}  
            onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>
      <Button type="submit">Login</Button>
    </Form>
    </>
)}