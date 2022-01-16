import Script from 'next/script'

const Footer = () => {
    return ( 
      <>
          <footer className="ftco-footer ftco-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md">
                  <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">About Us</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                      <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md">
                  <div className="ftco-footer-widget mb-4 ml-md-5">
                    <h2 className="ftco-heading-2">Information</h2>
                    <ul className="list-unstyled">
                      <li><a href="#" className="py-2 d-block">Portfolio</a></li>
                      <li><a href="#" className="py-2 d-block">Privacy</a></li>
                      <li><a href="#" className="py-2 d-block">Terms Condition</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md">
                  <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">Links</h2>
                    <ul className="list-unstyled">
                      <li><a href="#" className="py-2 d-block">Home</a></li>
                      <li><a href="#" className="py-2 d-block">About</a></li>
                      <li><a href="#" className="py-2 d-block">Work</a></li>
                      <li><a href="#" className="py-2 d-block">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md">
                  <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">Have a Questions?</h2>
                    <div className="block-23 mb-3">
                      <ul>
                        <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                        <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                        <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <p>Copyright ©2022 All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by</p>
                </div>
              </div>
            </div>
          </footer>
          <div id="ftco-loader" className="show fullscreen">
            <svg className="circular" width="48px" height="48px">
              <circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" />
              <circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokemiterlimit={10} stroke="#F96D00" />
            </svg>
          </div>
          {/* <Script src="js/jquery.min.js"></Script>
          <Script src="js/jquery-migrate-3.0.1.min.js"></Script>
          <Script src="js/popper.min.js"></Script>
          <Script src="js/bootstrap.min.js"></Script>
          <Script src="js/jquery.easing.1.3.js"></Script>
          <Script src="js/jquery.waypoints.min.js"></Script>
          <Script src="js/jquery.stellar.min.js"></Script>
          <Script src="js/owl.carousel.min.js"></Script>
          <Script src="js/jquery.magnific-popup.min.js"></Script>
          <Script src="js/aos.js"></Script>
          <Script src="js/jquery.animateNumber.min.js"></Script>
          <Script src="js/scrollax.min.js" ></Script>
          <Script src="js/main.js" ></Script> */}
    </>
        
     );
}
 
export default Footer;

