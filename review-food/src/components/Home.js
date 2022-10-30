import { useEffect } from "react";
import { useState } from "react";
import { Carousel, Card, Button, Row, Col, Container } from "react-bootstrap";
import Apis, { endpoints } from "../config/Apis";
import "../static/Home.css";

function Home() {
  const [sp, setSp] = useState([])
  useEffect(() => {
    const loadSP = async () => {
      const res = await Apis.get(endpoints['sanpham'])
      setSp(res.data)
    }
    loadSP()
  }, [])

  return (
    <div>
      <Carousel className="carousel-slide" >
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/images/banner1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="/images/banner3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          {sp.map(s => {
            return <Col xs={6} md={3}>
            <Card >
              <Card.Img variant="top" src={s.Image} />
              <Card.Body>
                <Card.Title>{s.ten_SP}</Card.Title>
                <Card.Text>
                  {s.price}
                </Card.Text>
                <Button variant="primary" href="/order">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
            
          })}

        </Row>
      </Container>
    </div>
  );
}

export default Home;