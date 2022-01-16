import Header from  '../components/header.js'
import Footer from  '../components/footer.js'

const Contact = () => {
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
          <h2 className="mb-3 bread">Contact Us</h2>
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
  <section className="contact-section bg-primary">
    <div className="container">
      <div className="row no-gutters d-flex contact-info">
        <div className="col-md-3 d-flex">
          <div className="align-self-stretch box p-4 py-md-5 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="icon-map-signs" />
            </div>
            <h3 className="mb-4">Address</h3>
            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="align-self-stretch box p-4 py-md-5 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="icon-phone2" />
            </div>
            <h3 className="mb-4">Contact Number</h3>
            <p>
              <a href="tel://1234567920">+ 1235 2355 98</a>
            </p>
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="align-self-stretch box p-4 py-md-5 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="icon-paper-plane" />
            </div>
            <h3 className="mb-4">Email Address</h3>
            <p>
              <a href="mailto:info@yoursite.com">info@yoursite.com</a>
            </p>
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="align-self-stretch box p-4 py-md-5 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="icon-globe" />
            </div>
            <h3 className="mb-4">Website</h3>
            <p>
              <a href="#">yoursite.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
    <div className="container-fluid px-0">
      <div className="row no-gutters block-9" style={{justifyContent:'center' }}>
        <div className="col-md-6 d-flex center">
          <form action="#" className="bg-light p-5 contact-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name ="textarea"
                id =""
                cols={30}
                rows={7}
                className="form-control"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                defaultValue="Send Message"
                className="btn btn-primary py-3 px-5"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer />
  </> );
}
 
export default Contact;
    
    

    