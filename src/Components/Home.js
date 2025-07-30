
function Home() {
  return (
    <>
      <main className="main">
  {/* Hero Section */}
  <section id="hero" className="hero section dark-background">
    <div className="hero-background">
      <img src="assets/img/bg/bg-14.webp" alt data-aos-duration={1000} />
      <div className="overlay" />
    </div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="hero-content">
            <span className="hero-badge">Innovative Solutions</span>
            <h1>REDFOX Dynamics</h1>
            <p>Empowering businesses through innovative ICT solutions tailored for efficiency, security, and growth.
We connect your future—seamlessly and smartly.</p>
            <div className="hero-actions">
              <a href="#services" className="btn-primary">Explore Services</a>
              </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="hero-visual">
            <div className="row g-3">
              <div className="col-6">
                <div className="feature-card">
                  <i className="bi bi-shield-check" />
                  <span>Secure &amp; Reliable</span>
                </div>
                <div className="feature-card">
                  <i className="bi bi-people" />
                  <span>Expert Team</span>
                </div>
              </div>
              <div className="col-6">
                <div className="feature-card">
                  <i className="bi bi-speedometer2" />
                  <span>High Performance</span>
                </div>
                <div className="feature-card">
                  <i className="bi bi-award" />
                  <span>Award Winning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Hero Section */}
  {/* About Section */}
  <section id="about" className="about section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="content">
            <h2>Transforming Ideas Into Reality Since 2010</h2>
            <p className="lead">We are a passionate team of innovators dedicated to creating exceptional digital experiences that drive meaningful results for businesses worldwide.</p>
            <p>Our journey began with a simple vision: to bridge the gap between cutting-edge technology and human-centered design. Today, we've grown into a trusted partner for companies seeking to transform their digital presence and accelerate their growth.</p>
            <p>Through collaborative partnerships and innovative solutions, we've helped tens of organizations achieve their goals while building lasting relationships founded on trust, transparency, and exceptional results.</p>
            <div className="stats-container">
              <div className="row">
                <div className="col-md-4">
                  <div className="stat-item">
                    <div className="number">15+</div>
                    <div className="label">Years Experience</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-item">
                    <div className="number">10+</div>
                    <div className="label">Projects Completed</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-item">
                    <div className="number">25</div>
                    <div className="label">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
        <div className="col-lg-6">
          <div className="image-wrapper">
            <img src="assets/img/about/about.webp" alt="About Us" className="img-fluid main-image" />
            <div className="floating-card">
              <div className="card-content">
                <i className="bi bi-award" />
                <div className="text">
                  <h5>Excellence Award</h5>
                  <span>Digital Innovation 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
 
  <section id="how-we-work" className="how-we-work section">
    {/* Section Title */}
    <div className="container section-title">
      <h2>How We Work</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="steps-grid">
        <div className="step-card">
          <div className="step-icon">
            <i className="bi bi-search" />
          </div>
          <div className="step-number">Step 1</div>
          <h3>Research &amp; Planning</h3>
          <p>It lays the foundation for successful software development by aligning technical solutions with business goals and user needs.</p>
          <div className="step-arrow">
            <i className="bi bi-arrow-right" />
          </div>
        </div>
        <div className="step-card">
          <div className="step-icon">
            <i className="bi bi-lightbulb" />
          </div>
          <div className="step-number">Step 2</div>
          <h3>Creative Solutions</h3>
          <p> We combine innovation and technology to solve complex problems with efficiency and originality.</p>
          <div className="step-arrow">
            <i className="bi bi-arrow-right" />
          </div>
        </div>
        <div className="step-card">
          <div className="step-icon">
            <i className="bi bi-gear" />
          </div>
          <div className="step-number">Step 3</div>
          <h3>Development</h3>
          <p>We transform planned ideas and designs into functional, working software through coding and integration.</p>
          <div className="step-arrow">
            <i className="bi bi-arrow-right" />
          </div>
        </div>
        <div className="step-card">
          <div className="step-icon">
            <i className="bi bi-rocket-takeoff" />
          </div>
          <div className="step-number">Step 4</div>
          <h3>Launch &amp; Support</h3>
          <p>We ensure smooth deployment of the software and provides ongoing maintenance for optimal performance and user satisfaction.</p>
        </div>
      </div>
    </div>
  </section>{/* /How We Work Section */}
  {/* Features Section */}
  <section id="services" className="services section light-background">
    {/* Section Title */}
    <div className="container section-title">
      <h2>Services</h2>
      <p>CHECK OUR SERVICES</p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-6 col-md-6">
          <div className="service-card featured">
            <div className="service-icon">
              <i className="bi bi-code-slash" />
            </div>
            <div className="service-content">
              <h3><a href="service-details.html">REDFOX ERP</a></h3>
              <p>our company develops erp for enterprises and i want explain about this in my website in one line</p>
              <div className="service-meta">
                <span className="badge popular">Most Popular</span>
                
              </div>
              <a href="service-details.html" className="btn-cta">
                <span>Get Started</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
            <div className="service-bg" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-palette" />
            </div>
            <div className="service-content">
              <h3><a href="service-details.html">UI/UX Design</a></h3>
              <p>We craft intuitive UI/UX designs that enhance user experience, drive engagement, and align seamlessly with your business goals.</p>
              <div className="service-meta">
                <span className="price">Starting at $1,899</span>
              </div>
              <a href="service-details.html" className="btn-cta">
                <span>Learn More</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
            <div className="service-bg" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-card compact">
            <div className="service-icon">
              <i className="bi bi-graph-up-arrow" />
            </div>
            <div className="service-content">
              <h3><a href="service-details.html">Web Development</a></h3>
              <p>We build responsive, secure, and high-performance websites tailored to meet your business needs and deliver exceptional user experiences.</p>
              <a href="service-details.html" className="btn-cta">
                <span>Explore</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
            <div className="service-bg" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-card compact">
            <div className="service-icon">
              <i className="bi bi-shield-check" />
            </div>
            <div className="service-content">
              <h3><a href="service-details.html">Security Solutions</a></h3>
              <p>We provide robust security solutions to protect your digital assets, ensure data integrity, and safeguard against cyber threats.</p>
              <a href="service-details.html" className="btn-cta">
                <span>Discover</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
            <div className="service-bg" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-card compact">
            <div className="service-icon">
              <i className="bi bi-cloud-upload" />
            </div>
            <div className="service-content">
              <h3><a href="service-details.html">ERP Consultancy</a></h3>
              <p>We offer expert ERP consultancy to help you choose, customize, and implement the right ERP system for your business success.</p>
              <a href="service-details.html" className="btn-cta">
                <span>Get Quote</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
            <div className="service-bg" />
          </div>
        </div>
      </div>
      <div className="stats-highlight">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" className="contact section">
    {/* Section Title */}
    <div className="container section-title">
      <h2>Contact</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="contact-main-wrapper">
        <div className="map-wrapper">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="contact-content">
          <div className="contact-cards-container">
            <div className="contact-card">
              <div className="icon-box">
                <i className="bi bi-geo-alt" />
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>8721 Broadway Avenue, New York, NY 10023</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="icon-box">
                <i className="bi bi-envelope" />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>info@examplecompany.com</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="icon-box">
                <i className="bi bi-telephone" />
              </div>
              <div className="contact-text">
                <h4>Call</h4>
                <p>+1 (212) 555-7890</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="icon-box">
                <i className="bi bi-clock" />
              </div>
              <div className="contact-text">
                <h4>Open Hours</h4>
                <p>Monday-Friday: 9AM - 6PM</p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <h3>Get in Touch</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>
            <form action="forms/contact.php" method="post" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="form-submit">
                <button type="submit">Send Message</button>
                <div className="social-links">
                  <a href="#"><i className="bi bi-twitter" /></a>
                  <a href="#"><i className="bi bi-facebook" /></a>
                  <a href="#"><i className="bi bi-instagram" /></a>
                  <a href="#"><i className="bi bi-linkedin" /></a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Contact Section */}
</main>

    </>
  );
}

export default Home;
