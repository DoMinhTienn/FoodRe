import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../static/Footer.css";

function Footer() {
    return (
        <Alert style={{marginBottom:"0"}} variant="success">
            <Container className="container-footer">
                <Row>
                  <Col xs={6} md={4}>
                    <Container>
                      <p className="p-text">Khám phá</p>
                      <hr/>
                      <p><Link className="p-link">Ứng dụng mobile</Link></p>
                      <p><Link className="p-link">Viết bình luận</Link></p>
                      <p><Link className="p-link">Tạo bộ sưu tập</Link></p>
                      <p><Link className="p-link">Quy định</Link></p>
                    </Container>
                  </Col>
                  <Col xs={6} md={4}>
                    <Container>
                      <p className="p-text">Công ty</p>
                      <hr/>
                      <p><Link className="p-link">Giới thiệu</Link></p>
                      <p><Link className="p-link">Nhà đầu tư</Link></p>
                      <p><Link className="p-link">Góp ý</Link></p>
                      <p><Link className="p-link">Liên hệ</Link></p>
                    </Container>
                  </Col>
                  <Col xs={6} md={4}>
                    <Container>
                      <p className="p-text">Tham gia trên</p>
                      <hr/>
                      <p><Link className="p-link">Facebook</Link></p>
                      <p><Link className="p-link">Instagram</Link></p>
                      <p><Link className="p-link">Tiktok</Link></p>
                      <p><Link className="p-link">Youtube</Link></p>
                      </Container>
                  </Col>
                </Row>
            </Container>
            <hr className="hr-bottom"/>
            <Container className="container-bottom">
                <p className="text-footer">Công ty cổ phần Hnoss - MST: 0305880944 do sở Kế Hoạch và Đầu Tư TPHCM cấp ngày 29/07/2008</p>
                <p className="text-footer">Địa chỉ: 313 Nguyễn Thị Thập, phường Tân Phú, Quận 7, TPHCM</p>
                <p className="text-footer">Copyright HNOSS. All rights reserved. Powered by Haravan Enterprise</p>
            </Container>
        </Alert>
    );
}

export default Footer;