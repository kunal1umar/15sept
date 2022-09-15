import c_image1 from "./Images/asset1.jpeg";
import c_image2 from "./Images/asset2.jpeg";
import c_image3 from "./Images/asset3.jpeg";
import w_image1 from "./Images/asset.jpg";
import { Link } from "react-router-dom";

function PreHeader() {
    return (
        <div class="navbar bg-dark" id="home">
            <div class="text-light mx-auto">
                PreHeader
            </div>
        </div>
    );
}

function Header() {
    return (

        <nav class="navbar sticky-top navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">NAMS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#aboutus">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#contactus">Contact Us</a>
                        </li>
                        {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}

                    </ul>
                    <form class="d-flex" role="search">
                    <Link class="btn btn-sm btn-outline-dark" to="/about"> Login </Link>
                        {/* <a class="btn btn-sm btn-outline-dark">Login</a> */}
                    </form>
                </div>
            </div>
        </nav>

    );
}



function Carousel() {
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
          <img src={c_image1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
          <img src={c_image2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
          <img src={c_image3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );

}

function CardPane() {
    return (
        <div id="services">
            <div class="d-flex m-4"><h2 class="mx-auto">Our Services</h2></div>
            <div class="row d-flex">
                <div class="card m-3 bg-dark text-light mx-auto" style={{ width: "24rem" }}>
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                        <h5 class="card-title">Easy Import</h5>
                        <p class="card-text">NAMS allows you to import your sheet data into it by arranging it according to the NAMS import sheet format.</p>
                        <a href="#" class="btn btn-outline-light">Go somewhere</a>
                    </div>
                </div>
                <div class="card m-3 bg-dark text-light mx-auto" style={{ width: "24rem" }}>
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                        <h5 class="card-title">Yearly Depreciation</h5>
                        <p class="card-text">NAMS apply yearly depreciation on each of the assets according to asset head rate provided.</p>
                        <a href="#" class="btn btn-outline-light">Go somewhere</a>
                    </div>
                </div>
                <div class="card m-3 bg-dark text-light mx-auto" style={{ width: "24rem" }}>
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                        <h5 class="card-title">Autogen Audit Reports</h5>
                        <p class="card-text">Audit reports can be downloaded for 3 different views associated to the asset classifications.</p>
                        <a href="#" class="btn btn-outline-light">Go somewhere</a>
                    </div>
                </div>
                <div class="card m-3 bg-dark text-light mx-auto" style={{ width: "24rem" }}>
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                        <h5 class="card-title">Asset classification</h5>
                        <p class="card-text">All the assets are classified into 3 categories: Head, Type, Asset for easy tracking and maintaining.</p>
                        <a href="#" class="btn btn-outline-light">Go somewhere</a>
                    </div>
                </div>
                <div class="card m-3 bg-dark text-light mx-auto" style={{ width: "24rem" }}>
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                        <h5 class="card-title">Easy access</h5>
                        <p class="card-text">Access NAMS from anywhere anytime. Recogize ghost or selected assets and fetch details on one click.</p>
                        <a href="#" class="btn btn-outline-light">Go somewhere</a>
                    </div>
                </div>
                <div class="card m-3 bg-dark text-light mx-auto" style={{ width: "24rem" }}>
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                        <h5 class="card-title">Barcode</h5>
                        <p class="card-text">NAMS provides barcode with asset code for each asset which helps to track and alter asset information.</p>
                        <a href="#" class="btn btn-outline-light">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );

}

function About() {
    return (
        <div class="row" id="aboutus">
            <div class="row">
                <hr></hr>
                <div class="d-flex m-4"><h2 class="mx-auto">About NAMS</h2></div>
            </div>
            <div class="d-flex m-2 mx-auto row" style={{ width: "80rem" }}>
                <div class="mx-auto"><h4 class="mx-auto"><span class="display-6">NAMS</span> is the leading solution in the market to <span class="display-6">track and manage</span> all your <span class="display-6">non-fluid assets</span>. It can generate <span class="display-6">audit reports</span> for all the financial years separately and into 3 different <span class="display-6">classification/views</span>. Easy to <span class="display-6">import</span> all you sheet data into NAMS on just one click. <span class="display-6">Barcodes</span> help to fetch all the data on spot for any asset and also helps in <span class="display-6">recognizing ghost assets</span>.</h4></div>
            </div>
        </div>
    );
}


function Contact() {
    return (
        <div class="row" id="contactus">
            <hr></hr>
            <div class="row d-flex">
                <div class="d-flex m-4"><h2 class="mx-auto">Contact Us</h2></div>
            </div>
            <div class="d-flex m-2 mx-auto row" style={{ width: "80rem" }}>
                <div class="mx-auto col-md-6" >
                    <img src={w_image1} style={{ width: "100%", height: "100%" }} />
                </div>
                <div class="mx-auto my-auto col-md-6">
                    <h3 class="mx-auto">Reach us...</h3>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingPassword" placeholder="Full name" />
                        <label for="floatingPassword">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Your Message</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <div>
            <footer class="page-footer font-small blue pt-4 mt-4 bg-dark text-light">
                <div class="container-fluid text-center text-md-left">
                    <div class="row mt-4">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <h3 class="text-uppercase">Non-Liquid Asset Management System</h3>
                            <p>Strategy to precision.</p>
                        </div>
                        <hr class="clearfix w-100 d-md-none pb-3" />
                        <div class="col-md-3 mb-md-0 mb-3" >
                            <h5 class="text-uppercase">Stay in touch</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <div class="form-sm mb-3">
                                        <input type="email" class="form-control form-control-sm" id="floatingInput" placeholder="name@example.com"/>
                                       <button class="btn btn-sm btn-outline-light mt-1">Subscribe</button>    
                                    </div>
                                </li>

                            </ul>

                        </div>
                        <div class="col-md-3 mb-md-0 mb-3">
                            <h5 class="text-uppercase">Features</h5>

                            <ul class="list-unstyled">
                                <li>
                                  Easy import data from sheets
                                </li>
                                <li>
                                   Get auto-gen audit reports
                                </li>
                                <li>
                                   Track and manage assets
                                </li>
                                <li>
                                    Maintain asset classification
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    NAMS
                </div>
            </footer>
        </div>
    );

}



export { PreHeader, Header, Footer, Carousel, CardPane, About, Contact };