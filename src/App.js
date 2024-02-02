import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Container,Row,Col,NavDropdown,Navbar, Button} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import { FaEnvelopeOpen } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeadset,FaArrowRight,FaCheck } from "react-icons/fa6";
import { FaTwitter,FaLinkedinIn,FaYoutube,FaPlay,FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";

import './App.css';
// import myimg1 from './img/i1.jpg';
import myimg1 from './img/i1.SVG';
import myimg2 from './img/i2.SVG';
import myimg3 from './img/i3.SVG';
import myimg4 from './img/i4.SVG';
import myimg5 from './img/i20.SVG';
import myimg6 from './img/i28.png';
import myimg7 from './img/i29.png';


const Option={
  responsive:{
    0:{
      items:3,
      dots:false,
      nav:false,
      autoplay:true,
      autoplayTimeout:1000,
    },
    600:{
      items:2,
      dote:false,
      autoplay:true,
      autoplayTimeout:1000,
    },
    1000:{
      items:6,
      dots:false,
      nav:false,
      autoplay:true,
      autoplayTimeout:1000,
    }
    }
  }


function App() {
  return (
    <>
    <div className="bgblue">
      <Container>
        <div className="top-info d-none d-sm-none d-md-none d-lg-block">
          <Row>
            <Col lg={8}>
            <span className="me-3">Welcome To Our Museum!</span>
            <span className="me-3"><FaEnvelopeOpen className="me-2 icon"></FaEnvelopeOpen>info@example.com</span>
            <span className="me-3"><FaHeadset className="me-2 icon"></FaHeadset>+2 123 654 7898</span>
            </Col>
            <Col>
              <div className="text-end">
              <FaFacebookF className="icon me-3"></FaFacebookF>
              <FaTwitter className="icon me-3"></FaTwitter>
              <FaLinkedinIn className="icon me-3"></FaLinkedinIn>
              <FaYoutube className="icon me-3"></FaYoutube>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
  </div>
  <header>
    <Navbar expand="lg">
      <Container>
          <Navbar.Brand><div className="logo"><img src={require('./img/logo.png')}></img></div></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
            <Nav className="ms-auto pe-6 nav">
            <NavDropdown title="Home" id="basic-nav-dropdown" className="home">
                <NavDropdown.Item href="#action/3.1">Home 01</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Home 02</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Home 03</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Collection" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Collection 01</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Collection 02</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Collection 03</NavDropdown.Item>
              </NavDropdown>
                <Nav.Link href="#home">Exhibitions</Nav.Link>
                <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Event</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">404 Error</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Membership</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Blog Single</NavDropdown.Item>
              </NavDropdown>
                <Nav.Link href="#collection">Contact</Nav.Link>
                <Nav.Link href="#home"><Button className="btn  d-md-none d-xl-block">Buy Ticket<FaArrowRight></FaArrowRight></Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
{/* ======================slider======================== */}
    <Carousel>
      <Carousel.Item>
      <img src={require('./img/slider-1.jpg')}></img>
        <Carousel.Caption className="txt">
          <h3 className="main-head">Welcome to muzex!</h3>
          <h1>Muzex Are The World's Leading Musem Of Art</h1>
          <p>
There are many variations of passages orem psum available but the majority have
suffered alteration in some form by injected humour or randomised words which
don't look even making it look like readable slightly believable.
</p>
<Button className="btn p-2 me-3">About More<FaArrowRight></FaArrowRight></Button>
<Button className="btn1 p-2">Lern More<FaArrowRight></FaArrowRight></Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require('./img/slider-2.jpg')}></img>
        <Carousel.Caption className="txt" >
          <h3 className="main-head">Welcome to muzex!</h3>
          <h1>Muzex Are The World's Leading Musem Of Art</h1>
          <p>
            There are many variations of passages orem psum available but the majority have
            suffered alteration in some form by injected humour or randomised words which
            don't look even making it look like readable slightly believable.
</p>
<Button className="btn p-2 me-3">About More<FaArrowRight></FaArrowRight></Button>
<Button className="btn1 p-2">Lern More<FaArrowRight></FaArrowRight></Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require('./img/slider-3.jpg')}></img>
        <Carousel.Caption className="txt">
          <h3 className="main-head ">Welcome to muzex!</h3>
          <h1>Muzex Are The World's Leading Musem Of Art</h1>
          <p>
There are many variations of passages orem psum available but the majority have
suffered alteration in some form by injected humour or randomised words which
don't look even making it look like readable slightly believable.
</p>
<Button className="btn p-2 me-3">About More<FaArrowRight></FaArrowRight></Button>
<Button className="btn1 p-2">Lern More<FaArrowRight></FaArrowRight></Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  {/*======================About Area================  */}
  <div className="about-area">
    <Container>
      <Row>
        <Col className="left ms-5 mb-5">
          <div className="about-left ">
            <div className="about-img">
            <img src={require('./img/i5.jpg')} className="img1"></img>
            <img src={require('./img/i6.jpg')} className="img2"></img>
            </div>
          </div>
        </Col>
        <Col >
          <div className="about-right ms-5">
              <div className="heading">
              <span class="site-title">About Us</span>
              <h3 class="main-title">The World's Lead Museum of Histrory</h3>
              </div>
              <p className="about-text">
                  There are many variations of passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form, by injected humour, or randomised words which don't
                  look even slightly believable.</p>
              <div className="about-topic">
                <ul className="about-list">
                  <li><FaCheck className="me-2 listing"></FaCheck>At vero eos et accusamus et iusto odio</li>
                  <li><FaCheck className="me-2 listing"></FaCheck>Established fact that a reader will be distracted</li>
                  <li><FaCheck className="me-2 listing"></FaCheck>Sed ut perspiciatis unde omnis iste natus sit</li>
                </ul>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  {/* ==================Exibition================ */}
  <div className="e-area">
    <Container>
      <Row>
        <Col lg={8}  className="lg-6 mx-auto">
          <div className="site-heading text-center">
          <span class="title-tagline">Exhibitions</span>
          <h2 class="text-title text-white">Ongoing Exhibitions</h2>
          <p className="text-white">It is a long established fact that a reader will be distracted</p>
          </div>
        </Col>
      </Row>
      <Row className="flex exibition">
        <Col className="md-6 lg-4 first-img" sm={12} md={6} lg={4}>
          <div className="e-item ">
            <div className="e-img">
            <img src={require('./img/i7.jpg')} className="img2"></img>
            <div className="e-content">
              <div className="e-meta">Exibition</div>
              <div className="e-title">The Exhibits Cover All Time Of The Egyptian Civilization</div>
              <div className="e-data">10 March 2023 - 15 March 2023</div>
            </div>
          </div>
          </div>
        </Col>
        <Col className="md-6 lg-4" sm={12} md={6} lg={4}>
        <div className="e-item mt-lg-5 justify-content-center">
            <div className="e-img">
            <img src={require('./img/i8.jpg')} className="img2"></img>
            <div className="e-content">
              <div className="e-meta">Exibition</div>
              <div className="e-title">The Exhibits Cover All Time Of The Egyptian Civilization</div>
              <div className="e-data">10 March 2023 - 15 March 2023</div>
            </div>
          </div>
          </div>
        </Col>
        <Col className="md-6 lg-4" sm={12} md={6} lg={4}>
        <div className="e-item justify-content-center">
            <div className="e-img">
            <img src={require('./img/i9.jpg')} className="img2"></img>
            <div className="e-content">
              <div className="e-meta">Exibition</div>
              <div className="e-title">The Exhibits Cover All Time Of The Egyptian Civilization</div>
              <div className="e-data">10 March 2023 - 15 March 2023</div>
            </div>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
    {/* ==================Event================== */}
  <div className="event">
      <Container>
        <Row>
        <Col className="lg-6 mx-auto" lg={8}>
          <div className="site-heading text-center">
          <span class="title-tagline">Events</span>
          <h2 class="text-title text-black">Our Upcoming Events</h2>
          <p className="text-black">It is a long established fact that a reader will be distracted</p>
          </div>
        </Col>
        </Row>
        <Row>
          <Col className="md-6 events">
            <div className="event-item flex-column flex-xl-row p-0">
                <div className="event-img">
                <img src={require('./img/i10.jpg')} className="img2"></img>
                </div>
                <div className="event-content">
                <h4 class="event-title">Strange Painting In The World</h4>
                <p>It is a long established fact that a reader will be distracted by the readablem content of a page when looking at its layout.</p>
                </div>
            </div>
          </Col>
          <Col className="md-6 events">
            <div className="event-item flex-column flex-xl-row ">
                <div className="event-img">
                <img src={require('./img/i11.jpg')} className="img2"></img>
                </div>
                <div className="event-content">
                <h4 class="event-title">Strange Painting In The World</h4>
                <p>It is a long established fact that a reader will be distracted by the readablem content of a page when looking at its layout.</p>
                </div>
            </div>
          </Col>
          <Col className="md-6 events ">
            <div className="event-item  flex-column flex-xl-row ">
                <div className="event-img">
                <img src={require('./img/i12.jpg')} className="img2"></img>
                </div>
                <div className="event-content">
                <h4 class="event-title">Strange Painting In The World</h4>
                <p>It is a long established fact that a reader will be distracted by the readablem content of a page when looking at its layout.</p>
                </div>
            </div>
          </Col>
          <Col className="md-6 events">
            <div className="event-item  flex-column flex-xl-row ">
                <div className="event-img">
                <img src={require('./img/i13.jpg')} className="img2"></img>
                </div>
                <div className="event-content">
                <h4 class="event-title">Strange Painting In The World</h4>
                <p>It is a long established fact that a reader will be distracted by the readablem content of a page when looking at its layout.</p>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
  {/* ==============Collection======= */}
  <div className="collection">
    <Container>
      <Row>
      <Col lg={8} className="lg-6 mx-auto">
          <div className="site-heading text-center">
          <span class="title-tagline">Collection</span>
          <h2 class="text-title text-black">Our Upcoming Events</h2>
          <p className="text-black">It is a long established fact that a reader will be distracted</p>
          </div>
        </Col> 
      </Row>
      <Row>
        <Col className="md-4" sm={12} md={6} lg={4}>
            <div className="c-item flex">
              <div className="c-img flex">
              <img src={require('./img/i14.jpg')} className="img"></img>
              </div>
            </div>
        </Col>
        <Col className="md-4" sm={12} md={6} lg={4}>
            <div className="c-item flex">
              <div className="c-img flex">
              <img src={require('./img/i15.jpg')} className="img"></img>
              </div>
            </div>
        </Col>
        <Col className="md-4" sm={12} md={6} lg={4}>
            <div className="c-item flex">
              <div className="c-img flex">
              <img src={require('./img/i16.jpg')} className="img"></img>
              </div>
            </div>
        </Col>
      </Row>
      <Row>
        <Col className="md-4" sm={12} md={6} lg={4}>
            <div className="c-item flex">
              <div className="c-img flex">
              <img src={require('./img/i17.jpg')} className="img"></img>
              </div>
            </div>
        </Col>
        <Col className="md-4" sm={12} md={6} lg={4}>
            <div className="c-item flex">
              <div className="c-img flex">
              <img src={require('./img/i18.jpg')} className="img"></img>
              </div>
            </div>
        </Col>
        <Col className="md-4" sm={12} md={6} lg={4}>
            <div className="c-item flex">
              <div className="c-img flex">
              <img src={require('./img/i19.jpg')} className="img"></img>
              </div>
            </div>
        </Col>
      </Row>
    </Container>
  </div>
  {/* ==============counting============ */}
  <div className="count">
    <Container>
      <Row>
        <Col sm={12} md={6} lg={3}>
          <div className="content-box m-3">
              <div className="icon p-2">
              <img src={require('./img/i20.SVG')} className="img"></img>
              </div>
              <div className="count">1200</div>
              <h6 class="title">+ Exhibition Held </h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
        <div className="content-box m-3">
              <div className="icon p-2">
              <img src={require('./img/i21.SVG')} className="img"></img>
              </div>
              <div className="count">1200</div>
              <h6 class="title">+ Daily visitors</h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={3} >
        <div className="content-box m-3">
              <div className="icon p-2">
              <img src={require('./img/i22.SVG')} className="img"></img>
              </div>
              <div className="count">1200</div>
              <h6 class="title">+ Exhibition Held </h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
        <div className="content-box m-3 ">
              <div className="icon p-2">
              <img src={require('./img/i23.SVG')} className="img"></img>
              </div>
              <div className="count">1200</div>
              <h6 class="title">+ Exhibition Held </h6>
          </div>
        </Col> 
      </Row>
    </Container>
  </div>
  {/* ==================video========= */}
  <section>
  <div className="video">
    <div className="video-icon">
      <div className="video-area">
        <a className="video-btn">
        <FaPlay></FaPlay>
        </a>
      </div>
    </div>
  </div>
</section>
{/* ================blog=========== */}
<div className="blog">
  <Container>
    <Row>
      <Col>
      <div className="site-heading text-center">
          <span class="title-tagline">OUR BLOG</span>
          <h2 class="text-title text-black">Latest News & Blog</h2>
          <p className="text-black">It is a long established fact that a reader will be distracted</p>
          </div>
      </Col>
    </Row>
    <Row>
      <Col sm={12} md={6} lg={4}>
        <div className="sub-list flex">
          <div className="content_box">
            <div className="blog-img">
            <img src={require('./img/i25.jpg')} style={{width:"100%",height:"100%"}}></img>
            <div className="list-title pt-2">There Are Many Variations Of The Passages Available Suffered</div>
            <p className="p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            <Button className="btn  d-md-none d-xl-block">Buy Ticket</Button>
            </div>
          </div>
        </div>
      </Col>
      <Col sm={12} md={6} lg={4}>
        <div className="sub-list flex">
          <div className="content_box">
            <div className="blog-img">
            <img src={require('./img/i26.jpg')} style={{width:"100%"}}></img>
            <div className="list-title">There Are Many Variations Of The Passages Available Suffered</div>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            <Button className="btn  d-md-none d-xl-block">Buy Ticket</Button>
            </div>
          </div>
        </div>
      </Col>
      <Col sm={12} md={6} lg={4}>
        <div className="sub-list flex">
          <div className="content_box">
            <div className="blog-img">
            <img src={require('./img/i27.jpg')} style={{width:"100%"}}></img>
            <div className="list-title">There Are Many Variations Of The Passages Available Suffered</div>
            <p>There are many variations of passages of Lcdorem Ipsum available, but the majority have suffered alteration in some form.</p>
            <Button className="btn  d-md-none d-xl-block">Buy Ticket</Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</div>
{/* ===============slider============= */}
<div className="slider">
<Container>
<OwlCarousel className='owl-theme'  {...Option} loop margin={10} nav>
    <div class='item'>
    <img src={require('./img/i28.png')}></img>
    </div>
    <div class='item'>
    <img src={require('./img/i29.jpg')}></img>
    </div>
    <div class='item'>
    <img src={require('./img/i28.png')}></img>
    </div>
    <div class='item'>
    <img src={require('./img/i29.jpg')}></img>
    </div>
    <div class='item'>
    <img src={require('./img/i28.png')}></img> 
    </div>
    <div class='item'>
    <img src={require('./img/i29.jpg')}></img>
    </div>
    <div class='item'>
    <img src={require('./img/i28.png')}></img>  
    </div>
    <div class='item'>
    <img src={require('./img/i29.jpg')}></img>
    </div>
    <div class='item'>
    <img src={require('./img/i28.png')}></img> 
    </div>
    <div class='item'>
    <img src={require('./img/i29.jpg')}></img>
    </div>
</OwlCarousel>
</Container>
</div>
{/* =============Fotter=========== */}
<footer className="fotter">
  <Container>
    <Row>
      <Col sm={12} md={6} lg={4} xl={3}>
        <div className="fotter-widget-box pt-5">
          <div className="fotter-logo">
          <img src={require('./img/i30.png')} style={{width:"100%"}}></img>
          </div>
          <p className="mb-3 content">
            We are many variations of passages available but the majority have suffered alteration
            in some form by injected humour words believable.
          </p>
          <ul className="fotter-contact">
            <li><FaPhoneAlt className="f-icon pt-1"></FaPhoneAlt>+2 123 654 7898</li>
            <li><IoLocationOutline className="f-icon pt-1"></IoLocationOutline>25/B Milford Road</li>
            <li><FaEnvelopeOpen className="f-icon pt-1"></FaEnvelopeOpen>info@example.com</li>
          </ul>
        </div>
      </Col >
      <Col sm={12} md={6} lg={4} xl={3}>
        <div className="fotter-widget">
          <div className="fotter-widget-title">Quick Links</div>
        </div>
        <ul className="fotter-list">
          <li><IoMdArrowDropright className="ficon"></IoMdArrowDropright>About Us</li>
          <li><IoMdArrowDropright className="ficon"></IoMdArrowDropright> FAQ's</li>
          <li><IoMdArrowDropright className="ficon"></IoMdArrowDropright> Terms Of Service</li>
          <li><IoMdArrowDropright className="ficon"></IoMdArrowDropright> Privacy policy</li>
          <li><IoMdArrowDropright className="ficon"></IoMdArrowDropright>Our Events</li>
          <li><IoMdArrowDropright className="ficon"></IoMdArrowDropright> Latest Blog</li>
          
        </ul>
      </Col>
      <Col sm={12} md={6} lg={4} xl={3}>
        <div className="fotter-widget">
          <div className="fotter-widget-title">Opening Time</div>
        </div>
        <ul className="opening-hour">
            <li><CiClock2 className="ficon"></CiClock2>Open day<span>Mon - Sat</span></li>
            <li><CiClock2 className="ficon"></CiClock2> Museum Open<span>10:00 AM</span></li>
            <li><CiClock2 className="ficon"></CiClock2> Exhibits Start<span>10:30 AM</span></li>
            <li><CiClock2 className="ficon"></CiClock2> Exhibits Close<span>04:30 PM</span></li>
            <li><CiClock2 className="ficon"></CiClock2> Museum Close<span>05:30 PM</span></li>
            <li><CiClock2 className="ficon"></CiClock2>off day<span>Sunday</span></li>
          </ul>
      </Col>
      <Col sm={12} md={6} lg={4} xl={3}>
        <div className="fotter-widget">
          <div className="fotter-widget-title">News Ltter</div>
        </div>
        <div class="footer-newsletter">
            <p>Subscribe Our Newsletter To Get Latest Update And News</p>
              <div class="subscribe-form">
                  <form action="#">
                      <input type="email" class="form-control" placeholder="Your Email"></input>
                      <button class="theme-btn" type="submit">
                      Subscribe Now <i class="far fa-paper-plane"></i>
                      </button>
                  </form>
              </div>
          </div>
        </Col>
    </Row>
  </Container>
  <div className="copyright pt-2">
        <div className="container">
        <p class="copyright-text">
          © <span id="date">2023</span> Copyright 2023 Mozex All Rights.
        </p>
        </div>
      </div>
</footer>
    </>

    
  
  );
  
}

export default App;

