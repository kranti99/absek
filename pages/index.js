import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from  '../components/header.js'
import Footer from  '../components/footer.js'
import Link from 'next/link'



export default function Home() {
  return (
    <div><Header />	  
		
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
            <Link href="/about"><a className="nav-link">
              About
            </a></Link>
          </li>
          <li className="nav-item">
            <a href="work.html" className="nav-link">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  <section id="home-section" className="hero">
    <h1 className="vr text-center">Evans</h1>
    <div className="js-fullheight home-wrap d-flex">
      <div className="half order-md-last" />
      <div className="half">
        <div className="home-slider owl-carousel">
          <div className="slider-item js-fullheight">
            <div className="overlay" />
            <div className="container-fluid p-0">
              <div
                className="row d-md-flex no-gutters slider-text js-fullheight align-items-center justify-content-end"
                data-scrollax-parent="true"
              >
                <div
                  className="one-third img js-fullheight"
                  style={{ backgroundImage: "url(images/bg_1.jpg)" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="slider-item js-fullheight">
            <div className="overlay" />
            <div className="container-fluid p-0">
              <div
                className="row d-flex no-gutters slider-text js-fullheight align-items-center justify-content-end"
                data-scrollax-parent="true"
              >
                <div
                  className="one-third img js-fullheight"
                  style={{ backgroundImage: "url(images/bg_2.jpg)" }}
                >
                  <div className="overlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-intro">
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-md-8">
          <h2>
            Web <span>Designer</span>, hobbyist writer, and the CEO &amp;
            Founder of <span>Evans</span>
          </h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="services-section py-5 py-md-0">
    <div className="container">
      <div className="row no-gutters d-flex">
        <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon">
              <span className="flaticon-layers" />
            </div>
            <div className="media-body">
              <h3 className="heading mb-3">Web Design</h3>
              <p> 203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services active d-block">
            <div className="icon">
              <span className="flaticon-web-programming" />
            </div>
            <div className="media-body">
              <h3 className="heading mb-3">Web Development</h3>
              <p>
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon">
              <span className="flaticon-idea" />
            </div>
            <div className="media-body">
              <h3 className="heading mb-3">Graphic Design</h3>
              <p>
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services active-2 d-block">
            <div className="icon">
              <span className="flaticon-contract" />
            </div>
            <div className="media-body">
              <h3 className="heading mb-3">Writing</h3>
              <p>
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-portfolio">
    <div className="container-fluid">
      <div className="row justify-content-center pb-3">
        <div className="col-md-12 mb-5 heading-section text-center ftco-animate">
          <h2 className="mb-5">
            Latest &amp; <span>Greatest</span>
          </h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-12 portfolio-wrap">
          <div className="row no-gutters align-items-center">
            <div
              className="col-md-5 img js-fullheight"
              style={{ backgroundImage: "url(images/work-1.jpg)" }}
            ></div>
            <div className="col-md-7">
              <div className="text pt-5 pl-0 pl-lg-5 pl-md-4 ftco-animate">
                <div className="px-4 px-lg-4">
                  <div className="desc">
                    <div className="top">
                      <span className="subheading">
                        Web Design {"{"}12/06/2019{"}"}
                      </span>
                      <h2 className="mb-4">
                        <a href="work.html">Midway</a>
                      </h2>
                    </div>
                    <div className="absolute">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove.
                      </p>
                      <p>
                        <a href="#" className="custom-btn">
                          View Portfolio
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid px-0 portfolio-entry">
      <div className="row no-gutters d-xl-flex justify-content-end text-wrapper">
        <div
          className="one-half img js-fullheight"
          style={{ backgroundImage: 'url("images/work-2.jpg")' }}
        />
        <div className="one-half half-text d-flex justify-content-end align-items-center ftco-animate">
          <div className="text align-items-center d-flex">
            <div className="desc pt-5 pl-4 pr-4 pt-lg-0 pl-lg-5 pl-xl-0 pr-xl-0">
              <div className="top">
                <span className="subheading">
                  Writing {"{"}12/06/2019{"}"}
                </span>
                <h2 className="mb-4">
                  <a href="work.html">Workplace Office</a>
                </h2>
              </div>
              <div className="absolute">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove.
                </p>
                <p>
                  <a href="#" className="custom-btn">
                    View Portfolio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid px-0 portfolio-entry">
      <div className="row no-gutters d-md-flex justify-content-start text-wrapper">
        <div
          className="one-half img js-fullheight"
          style={{ backgroundImage: 'url("images/work-3.jpg")' }}
        />
        <div className="one-half half-text d-flex justify-content-end align-items-center ftco-animate">
          <div className="text-2 align-items-start d-flex">
            <div className="desc pt-5 pr-4 pl-4 pt-lg-0 pr-lg-5 pr-xl-0 pl-xl-0">
              <div className="top">
                <span className="subheading">
                  Illustration {"{"}12/06/2019{"}"}
                </span>
                <h2 className="mb-4">
                  <a href="work.html">Jacket Leather</a>
                </h2>
              </div>
              <div className="absolute">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove.
                </p>
                <p>
                  <a href="#" className="custom-btn">
                    View Portfolio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-12 portfolio-wrap">
          <div className="row no-gutters align-items-center">
            <div
              className="col-md-5 order-md-last img js-fullheight"
              style={{ backgroundImage: "url(images/work-4.jpg)" }}
            ></div>
            <div className="col-md-7">
              <div className="text pt-5 pr-md-5 ftco-animate">
                <div className="px-4 px-lg-4">
                  <div className="desc">
                    <div className="top">
                      <span className="subheading">
                        Application {"{"}12/06/2019{"}"}
                      </span>
                      <h2 className="mb-4">
                        <a href="work.html">Topless</a>
                      </h2>
                    </div>
                    <div className="absolute">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove.
                      </p>
                      <p>
                        <a href="#" className="custom-btn">
                          View Portfolio
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid px-0 portfolio-entry">
      <div className="row no-gutters d-md-flex justify-content-end text-wrapper">
        <div
          className="one-half img js-fullheight"
          style={{ backgroundImage: 'url("images/work-5.jpg")' }}
        />
        <div className="one-half half-text d-flex justify-content-end align-items-center ftco-animate">
          <div className="text align-items-center d-flex">
            <div className="desc pt-5 pl-5 pr-5 pt-lg-0 pl-lg-5 pl-xl-0 pr-xl-0">
              <div className="top">
                <span className="subheading">
                  Writing {"{"}12/06/2019{"}"}
                </span>
                <h2 className="mb-4">
                  <a href="work.html">Fashion Style</a>
                </h2>
              </div>
              <div className="absolute">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove.
                </p>
                <p>
                  <a href="#" className="custom-btn">
                    View Portfolio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-12 portfolio-wrap">
          <div className="row no-gutters align-items-center">
            <div
              className="col-md-5 img js-fullheight"
              style={{ backgroundImage: "url(images/work-6.jpg)" }}
            ></div>
            <div className="col-md-7">
              <div className="text pt-5 pl-md-5 pl-md-4 ftco-animate">
                <div className="px-4 px-lg-4">
                  <div className="desc">
                    <div className="top">
                      <span className="subheading">
                        Illustration {"{"}12/06/2019{"}"}
                      </span>
                      <h2 className="mb-4">
                        <a href="work.html">Prickly</a>
                      </h2>
                    </div>
                    <div className="absolute">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove.
                      </p>
                      <p>
                        <a href="#" className="custom-btn">
                          View Portfolio
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
   		<Footer />
    
     
</div>
  )
}
