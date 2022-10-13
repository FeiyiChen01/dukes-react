import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

const TopMenu = () => (
    <Container id="topMenu" fluid className="py-3">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#logo"><Image src="https://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/wod-dukes-logo.png"></Image></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#">MENUS</Nav.Link>
            <Nav.Link href="#">DUKE</Nav.Link>
            <Nav.Link href="#">SHOP</Nav.Link>
            <Nav.Link href="#">JOIN OUR TEAM</Nav.Link>
            <Nav.Link href="#">CONTACT</Nav.Link>
            <Nav.Link href="#">ORDER TAKEOUT & DELIVERY</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </Container>
);

const CenterImage = () => (
    <div>
      <img src="https://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/wod-dukes-center-image.png"></img>
    </div>
)

const Footer =() => (
    <footer className="mt-auto">
      <Row>
        <Col>
          <Container>
            <h1>
              "HOME OF "
              <strong>DUKE KAHANAMOKU</strong>
            </h1>
            <p>
              Make yourself at home, where the legend Duke Kahanamoku grew up
              swimming, surfing, canoeing and bodysurfing. In 1929, Duke rode a
              monster wave for 1 1/8 miles at Waikiki, likely the longest ride
              in modern times. You know that image in your mind of Waikiki
              Beach, the one with Diamond Head in the distance and outrigger
              canoes in a turquoise bay of warm water? It’s real and it’s here
              every day. Splash, body surf or surf, in the warm, turquoise
              water just below Hawaii’s icon, Diamond Head – just like Duke
              did.
            </p>
          </Container>
        </Col>
      </Row>

      <Row  className="footrow">
        <Container>

            <Nav.Link href="#"><strong>TS RESTAURANTS</strong></Nav.Link>
            <Nav.Link href="#"><strong>JOIN THE TEAM</strong></Nav.Link>
            <Nav.Link href="#"><strong>BUY GIFT CARDS</strong></Nav.Link>
            <Nav.Link href="#"><strong>WHAT IS HULA PIE</strong></Nav.Link>
            <Nav.Link href="#"><strong>LEGACY OF ALOHA</strong></Nav.Link>
            <Nav.Link href="#"><strong>AWARDS</strong></Nav.Link>
            <Nav.Link href="#"><strong>CALL 808.922.2268</strong></Nav.Link>
            <Nav.Link><Facebook/></Nav.Link>
            <Nav.Link><Twitter/></Nav.Link>
            <Nav.Link><Instagram/></Nav.Link>
        </Container>
      </Row>
    </footer>

)
const Dukes = () => (
    <div>
      <TopMenu/>
      <CenterImage/>
      <Footer/>
    </div>
);
ReactDOM.render(<Dukes/>, document.getElementById('root'));