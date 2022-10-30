import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import "../static/Personal.css";
import { FcTodoList, FcRules, FcSelfServiceKiosk, FcSettings, FcLock } from "react-icons/fc";
import Order from "./Order";
import ArticleList from "./ArticleList";


function Personal() {
    return (

        <Tab.Container id="left-tabs-example" defaultActiveKey="active">
      <Container style={{height:"700px", marginLeft:"150px"}}>
          <Row style={{height:"650px",paddingTop:"20px"}}>
            <Col className="col-select" sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="active"><FcRules className="icon-select"/> Hoạt động cá nhân</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="order"><FcTodoList className="icon-select"/> Lịch sử đặt hàng</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="pay"><FcSelfServiceKiosk className="icon-select"/> Thanh toán</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/editaccount" eventKey="editaccount"><FcSettings className="icon-select"/> Chỉnh sửa tài khoản</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="logout"><FcLock className="icon-select"/> Đăng xuất</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="active">
                  <ArticleList />
                </Tab.Pane>
                <Tab.Pane eventKey="order">
                  <Order />
                </Tab.Pane>
                <Tab.Pane eventKey="pay">
          
                </Tab.Pane>
                <Tab.Pane eventKey="logout">
          
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
      </Container>
    </Tab.Container>
    );
}

export default Personal;