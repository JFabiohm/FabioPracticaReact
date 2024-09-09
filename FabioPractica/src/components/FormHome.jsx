import {
  Navbar,
  Nav,
  Button,
  Container,
  Form,
  NavDropdown,
  Carousel,
  Offcanvas,
  Card,
} from "react-bootstrap";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../styles/Home.css";
import Olla from "../img/queque_unicornio.jpg";
import Logo from "../img/queque_tiktok.jpg";
import Botas from "../img/queque_mitad.jpg";
import Estanteria from "../img/queque_chocoFresa.jpg";

function ExampleCarouselImage({ text }) {
  return <img className="d-block w-100" src={Olla} alt={text} />;
  return <img className="d-block w-100" src={Botas} alt={Botas} />;
}

function FormHome() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="body_home">
        <div>
          <Navbar expand="lg" className="custom_NavBar">
            <Container fluid>
              <Navbar.Brand>
                <img src={Logo} alt="Logo" style={{ height: "70px" }} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link>Home</Nav.Link>
                  <Nav.Link>Login</Nav.Link>
                  <NavDropdown title="Other" id="navbarScrollingDropdown">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                    <NavDropdown.Item></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Something else here</NavDropdown.Item>
                  </NavDropdown>
                  <Button variant="primary" onClick={handleShow}>
                    <i class="bi bi-cart2"></i>
                  </Button>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div>
          {" "}
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="custom_carousel"
          >
            <Carousel.Item>
              <ExampleCarouselImage text="First slide" />
              <Carousel.Caption>
                <h3>Olla inoxidable</h3>
                <p>esta olla a un precio razonable</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage Botas="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage text="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <i class="bi bi-cart2"> Carrito</i>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body></Offcanvas.Body>
          </Offcanvas>
        </div>

        <div className="move_Cards">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Botas} className="img_Cards" />
            <Card.Body>
              <Card.Title>Botas</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Botas} className="img_Cards" />
            <Card.Body>
              <Card.Title>Botas</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Botas} className="img_Cards" />
            <Card.Body>
              <Card.Title>Botas</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Estanteria} className="img_Cards" />
            <Card.Body>
              <Card.Title>Estanteria</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="move_Cards">
          <div className="card">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Botas} className="img_Cards" />
              <Card.Body>
                <Card.Title>Botas</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
              </Card.Body>
            </Card>
          </div>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Botas} className="img_Cards" />
            <Card.Body>
              <Card.Title>Botas</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Botas} className="img_Cards" />
            <Card.Body>
              <Card.Title>Botas</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Estanteria} className="img_Cards" />
            <Card.Body>
              <Card.Title>Estanteria</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
          </Card>
        </div>

        
      </div>
    </>
  );
}

export default FormHome;
