import Head from 'next/head'
import Link from 'next/link';
const Header = () => {
    return ( <>
        <Head>
            <title>Evans - Free Bootstrap 4 Template by Colorlib</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            
            <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed:900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap" rel="stylesheet" />

            <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
            <link rel="stylesheet" href="css/animate.css" />
            
            <link rel="stylesheet" href="css/owl.carousel.min.css" />
            <link rel="stylesheet" href="css/owl.theme.default.min.css" />
            <link rel="stylesheet" href="css/magnific-popup.css" />

            <link rel="stylesheet" href="css/aos.css" />

            <link rel="stylesheet" href="css/ionicons.min.css" />

            <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
            <link rel="stylesheet" href="css/jquery.timepicker.css" />

            
            <link rel="stylesheet" href="css/flaticon.css" />
            <link rel="stylesheet" href="css/icomoon.css" />
            <link rel="stylesheet" href="css/style.css"/>
        </Head>
        <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
        Evans
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link href="/"><a className="nav-link">
              Home
            </a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">
              About
            </a></Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
            <a  className="nav-link">
              Contact
            </a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
        </>
     );
}
 
export default Header