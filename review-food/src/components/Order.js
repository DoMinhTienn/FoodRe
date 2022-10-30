import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Order() {
    return (
        <div>
            <Navbar className="navbar-header-shopee" bg="light" expand="lg" style={{backgroundColor: "white"}}>
                  <Container fluid>
            <Navbar.Brand className="navbar-logo">
              <a href="https://shopeefood.vn/"><img
                className="img-Logo"
                src="images/logoshopee.png"
                alt="Logo"
                style={{height: "60px"}}/></a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <a className="nav-link" href="https://shopeefood.vn/ha-noi/food">Đồ ăn</a>
                <a className="nav-link" href="https://shopeefood.vn/ha-noi/fresh">Thực phẩm</a>
                <a className="nav-link" href="https://shopeefood.vn/ha-noi/liquor">Bia</a>
                <a className="nav-link" href="https://shopeefood.vn/ha-noi/flowers">Hoa</a>
                <a className="nav-link" href="https://shopeefood.vn/ha-noi/fmcg">Siêu thị</a>
                <a className="nav-link" href="https://shopeefood.vn/ha-noi/medicine">Thuốc</a>
                <a className="nav-link" href="https://shopeefood.vn/ha-noi/pets">Thú cưng</a>
              </Nav>
              <Nav className="nav-header"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <a className="nav-link" href="https://shopeefood.vn/account/login">Đăng nhập</a>
              </Nav>
            </Navbar.Collapse>
                  </Container>
                </Navbar>
            <Container>
                <Container>
                    <Row>
                        <Col sm={8}>sm=8</Col>
                        <Col sm={4}>sm=4</Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Order;