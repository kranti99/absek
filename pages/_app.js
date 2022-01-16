import Script from 'next/script'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return ( 
    <>
          <Script src="js/jquery.min.js"></Script>
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
          <Script src="js/main.js" ></Script>
    <Component {...pageProps} />
        
    </>
    )
}

export default MyApp
