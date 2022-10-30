
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { redirect, useNavigate } from "react-router";
import Apis, { endpoints } from "../config/Apis";

const SignUp = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [isInvalid, setIsInvalid] = useState(false)
  const [err, setErr] = useState(false)
  const [check,setCheck] = useState(false)
  const avatar = useRef()

  const Signup = (evt) => {
    evt.preventDefault()
    const singupUser = async () => {
      const formData = new FormData()
      formData.append("first_name", firstname)
      formData.append("last_name", lastname)
      formData.append("email", email)
      formData.append("username", username)
      formData.append("password", password)
      formData.append("avatar", avatar.current.files[0])
      try {
        const res = await Apis.post(endpoints['signup'], formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        nav(`/login`)
      } catch (e) {
        setErr(true)
      }


    }
    if (password !== null && password === confirmPassword) {
      singupUser()
    }
    if (password != confirmPassword) {
      setIsInvalid(true);
    }
  }

  let a
  if (check)
  {
    a = <Button variant="primary" type="submit">Submit</Button>
  }
  else
  {
    a = <Button variant="primary" type="submit" disabled>Submit</Button>
  }



  return (
    <Container style={{
      backgroundColor: "#ced7d430",
      width: "30%",
      height: "30%",
      alignSelf: "center",
      marginTop: "6vh",
      marginBottom: "6vh",
      borderRadius: "1.5rem"
    }}>
      <h1 style={{ textAlign: "center", paddingTop: "30px", paddingBottom: "15px" }}>Đăng ký</h1>
      <Form onSubmit={Signup}>
        <Form.Group className="mb-3" controlId="formFirstname">
          <Form.Control
            style={{ width: "350px", marginLeft: "35px" }}
            value={firstname}
            type="text"
            onChange={(event) => setFirstname(event.target.value)}
            placeholder="First name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastname">
          <Form.Control
            style={{ width: "350px", marginLeft: "35px" }}
            value={lastname}
            type="text"
            onChange={(event) => setLastname(event.target.value)}
            placeholder="Last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Control
            style={{ width: "350px", marginLeft: "35px" }}
            className={`${err ? 'is-invalid' : ''}`}
            value={username}
            type="text"
            onChange={(event) => { setUsername(event.target.value); setErr(false); }}
            placeholder="User name" />
        </Form.Group>
        <Form.Label className={`${err ? 'err text-danger' : 'err-hide'}`}>Username đã được sử dụng. Vui lòng chọn username khác</Form.Label>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            style={{ width: "350px", marginLeft: "35px" }}
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            style={{ width: "350px", marginLeft: "35px" }}
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control
            style={{ width: "350px", marginLeft: "35px" }}
            value={confirmPassword}
            type="password"
            onChange={(event) => { setConfirmPassword(event.target.value); setIsInvalid(false); }}
            placeholder="Confirm Password" />
          <Form.Label className={`${isInvalid ? 'err text-danger' : 'err-hide'}`}>Password không khớp</Form.Label>

        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label style={{ width: "350px", marginLeft: "35px" }}>Hình ảnh</Form.Label>
          <Form.Control style={{ width: "350px", marginLeft: "35px" }} type="file"
            required
            ref={avatar}
            placeholder="Avatar" />
        </Form.Group>

        <Form.Group style={{ width: "350px", marginLeft: "35px" }} id="formGridCheckbox">
          <Form.Check  checked={check} onChange={(evt) => setCheck(evt.currentTarget.checked)} type="checkbox" label="Check me out" />
        </Form.Group>

        <div style={{ marginLeft: "135px", paddingTop: "10px", paddingBottom: "10px" }}>
          {a}
          <Button href="/" style={{ marginLeft: "10px", backgroundColor: "gray", borderColor: "none" }} variant="primary" type="cancel">
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );

}
export default SignUp;