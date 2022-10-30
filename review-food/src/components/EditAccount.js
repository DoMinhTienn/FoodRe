import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { HiPencilSquare, HiLockClosed, HiCamera, HiBuildingLibrary, HiXCircle } from "react-icons/hi2";
import "../static/EditAccount.css"
import Infor from "./Infor";

function EditAccount() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="infor">
      <Container style={{height:"700px",marginLeft:"150px" }}>
          <Row style={{height:"650px",paddingTop:"20px"}}>
            <Col className="col-select" sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="navlink-abc" eventKey="infor"><HiPencilSquare className="icon-select"/> Thông tin cơ bản</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="navlink-abc" eventKey="pass"><HiLockClosed className="icon-select"/> Đổi mật khẩu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="navlink-abc" eventKey="avatar"><HiCamera className="icon-select"/> Ảnh đại diện</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="navlink-abc" eventKey="address"><HiBuildingLibrary className="icon-select"/> Quản lý địa chỉ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="navlink-abc" eventKey="logout"><HiXCircle className="icon-select"/> Đăng xuất</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="infor">
                    <Infor/>
                </Tab.Pane>
                <Tab.Pane eventKey="pass">
                  <h2>pass</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="avatar">
                <h2>avatar</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="address">
                    <h2>address</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="logout">
                    <h2>logout</h2>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
      </Container>
    </Tab.Container>
    );
}

export default EditAccount;