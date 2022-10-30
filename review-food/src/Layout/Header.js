import "../static/Header.css";
import React from "react";
import { Nav, Navbar, Container, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from"react-redux";
import { logoutUser } from "../ActionCreators/userCreators";
import cookies from "react-cookies";
import Apis, { endpoints } from "../config/Apis";

export default function Header() {

  const logout = (event) => {
	  event.preventDefault()
	  localStorage.removeItem("access_token")
	  localStorage.removeItem("user")
  }
  
  return ( 
    <Navbar className="navbar-header" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className="navbar-logo">
          <Link className="nav-link Nav-Logo" to="/">
            <img 
            className="img-Logo" 
            src="images/logo.png"
            alt="Logo" 
            style={{height: "60px"}}/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link className="nav-link" href="/">Trang chủ</Nav.Link>
            <Nav.Link className="nav-link" href="/news">Tin tức</Nav.Link>
            <Nav.Link className="nav-link" href="/product">Sản phẩm</Nav.Link>
            <Nav.Link className="nav-link" href="/store">Cửa hàng</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="btn-search">
            <FaSearch className="icon-search"/>
            </Button>
          </Form>
          <Nav className="nav-header"
            style={{ maxHeight: '100px' }}
            navbarScroll>
               {/* {path} */}
               <Nav.Link className="nav-link" href="/login">Đăng nhập</Nav.Link>
               <Nav.Link className="nav-link" href="/signup">Đăng kí</Nav.Link>
          </Nav>
          <Nav className="nav-header"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <DropdownButton
              style={{color:"red"}}
              align="end"
              title= {<FaUserAlt className="icon-user"/>}
              id="dropdown-menu-align-end">
              <Dropdown.Item href="/personal">Trang cá nhân</Dropdown.Item>
              <Dropdown.Item href="/articlelist">Danh sách các bài viết</Dropdown.Item>
              <Dropdown.Item href="/editaccount">Chỉnh sửa thông tin</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item  onClick={logout}>Đăng xuất</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);}