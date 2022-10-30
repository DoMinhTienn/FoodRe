import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../static/Infor.css";

function Infor() {
    return ( 
        <Container style={{height:"600px", backgroundColor:"white",}}>
            <h2 style={{textAlign:"center", paddingTop:"30px"}}>Thông tin tài khoản</h2>
            <div style={{marginTop:"30px"}}>
                <Row>
                        <Form.Label column lg={4} style={{textAlign:"right"}}>Họ
                        </Form.Label>
                        <Col>
                          <Form.Control size="lg" type="text" placeholder="Large text" />
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Form.Label column lg={4} style={{textAlign:"right"}}>Tên
                        </Form.Label>
                        <Col>
                          <Form.Control size="lg" type="text" placeholder="Large text" />
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Form.Label column lg={4} style={{textAlign:"right"}}>Email
                        </Form.Label>
                        <Col>
                          <Form.Control size="lg" type="text" placeholder="Large text" />
                        </Col>
                      </Row>
                      <Row style={{marginLeft:"350px", paddingTop:"30px"}}>
                        <Col sm={2}>
                        <Button as="input" type="submit" value="Submit" />
                        </Col>
                        <Col sm={2}>
                        <Button as="input" type="submit" value="Cancel" />
                        </Col>
                      </Row>
            </div>
      
      
        </Container>
     );
}

export default Infor;