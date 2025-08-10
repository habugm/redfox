
function Footer() {
  return (
    <>
      <footer id="footer" className="footer position-relative dark-background">
  <div className="container footer-top">
    <div className="row gy-4">
      <div className="col-lg-5 col-md-12 footer-about">
        <a href="index.html" className="logo d-flex align-items-center">
          {/* <span className="sitename">RedFox</span> */}
          <img src="assets/img/misc/a.png" className="sitename" />
        </a>
        <p>Empowering businesses with innovative ICT solutions—from development to support—for a smarter, connected future.</p>
        <div className="social-links d-flex mt-4">
          <a href><i className="bi bi-twitter-x" /></a>
          <a href><i className="bi bi-facebook" /></a>
          <a href><i className="bi bi-instagram" /></a>
          <a href><i className="bi bi-linkedin" /></a>
        </div>
      </div>
      <div className="col-lg-2 col-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Terms of service</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </div>
      <div className="col-lg-2 col-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><a href="#">RedFox ERP</a></li>
          <li><a href="#">ERP Consultancy</a></li>
          <li><a href="#">IT Infrastructure</a></li>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">Mobile App Development</a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>
        <p>Lideta Subcity</p>
        <p>Addis Ababa</p>
        <p>Ethiopia</p>
        <p className="mt-4"><strong>Phone:</strong> <span>+251 914 11 36 59</span></p>
        <p><strong>Email:</strong> <span>redfoxdynamics@gmail.com</span></p>
      </div>
    </div>
  </div>
  <div className="container copyright text-center mt-4">
    <p>© <span>Copyright</span> <strong className="px-1 sitename">MyWebsite</strong> <span>All Rights Reserved</span></p>
    <div className="credits">
      {/* All the links in the footer should remain intact. */}
      {/* You can delete the links only if you've purchased the pro version. */}
      {/* Licensing information: https://bootstrapmade.com/license/ */}
      {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
      Designed by <a href="#">Haben Gebremedhin</a>
    </div>
  </div>
</footer>

    </>
  );
}

export default Footer;
