import Header from  '../components/header.js'
import Footer from  '../components/footer.js'

const About = () => {
  return ( <>
    <Header />
  
  <section
    className="hero-wrap hero-wrap-2 js-fullheight"
    style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end">
        <div className="col-md-9 ftco-animate pb-5">
          <h2 className="mb-3 bread">About Us</h2>
          <p className="breadcrumbs">
            <span className="mr-2">
              <a href="index.html">
                Home <i className="ion-ios-arrow-forward" />
              </a>
            </span>{" "}
            <span>
              About us <i className="ion-ios-arrow-forward" />
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-intro">
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-md-4 d-flex">
          <div
            className="img"
            style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
          />
        </div>
        <div className="col-md-8 py-md-5 pt-4 p-md-5">
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
          <p>
            <a href="#" className="btn btn-primary">
              Contact Us
            </a>
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
  <section className="testimony-section">
    <div className="container">
      <div className="row ftco-animate justify-content-center">
        <div className="col-md-5 d-flex">
          <div
            className="testimony-img"
            style={{ backgroundImage: "url(images/bg_2.jpg)" }}
          />
        </div>
        <div className="col-md-7 py-5 pl-md-5">
          <div className="heading-section heading-section-white pt-4 ftco-animate">
            <h2 className="mb-0">Customer Says</h2>
          </div>
          <div className="carousel-testimony owl-carousel ftco-owl">
            <div className="item">
              <div className="testimony-wrap pb-4">
                <div className="text">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <div className="d-flex">
                  <div
                    className="user-img"
                    style={{ backgroundImage: "url(images/person_1.jpg)" }}
                  ></div>
                  <div className="pos ml-3">
                    <p className="name">Jeff Nucci</p>
                    <span className="position">Businessman</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap pb-4">
                <div className="text">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <div className="d-flex">
                  <div
                    className="user-img"
                    style={{ backgroundImage: "url(images/person_1.jpg)" }}
                  ></div>
                  <div className="pos ml-3">
                    <p className="name">Jeff Nucci</p>
                    <span className="position">Businessman</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap pb-4">
                <div className="text">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <div className="d-flex">
                  <div
                    className="user-img"
                    style={{ backgroundImage: "url(images/person_1.jpg)" }}
                  ></div>
                  <div className="pos ml-3">
                    <p className="name">Jeff Nucci</p>
                    <span className="position">Businessman</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap pb-4">
                <div className="text">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <div className="d-flex">
                  <div
                    className="user-img"
                    style={{ backgroundImage: "url(images/person_1.jpg)" }}
                  ></div>
                  <div className="pos ml-3">
                    <p className="name">Jeff Nucci</p>
                    <span className="position">Businessman</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap pb-4">
                <div className="text">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <div className="d-flex">
                  <div
                    className="user-img"
                    style={{ backgroundImage: "url(images/person_1.jpg)" }}
                  ></div>
                  <div className="pos ml-3">
                    <p className="name">Jeff Nucci</p>
                    <span className="position">Businessman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-intro bg-light">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 text-center">
          <h2 className="mb-0 font-primary">
            We've done work of
            <span className="number" data-number={300}>
              0
            </span>
            Portfolio
          </h2>
        </div>
      </div>
    </div>
  </section>
    <Footer />
</>

 );
}
 
export default About;
    
    
    
    