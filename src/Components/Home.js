
function Home() {
  return (
    <>
      <main className="main">
  {/* Hero Section */}
  <section id="hero" className="hero section dark-background">
    <div className="hero-background">
      <img src="assets/img/bg/bg-141.jpg" alt  />
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
            <p>REDFOX ICT Solutions PLC (RICTSP) is the leading, but yet the youngest, private, center of research and development business firm with a great vision of being a world-class information and information systems provider at a maximum security against any peril.</p>
              <p>RICTSP, in order to tie itself up with the world-class providers, it has to give priority to developing highly diligent and skilled professionals in the cutting-edge technology as well as serving the governmental, nongovernmental organizations and the society in general using the up- to-date and secure information communication technology and make the country competitive with the ever-dynamic world.</p>
                <p>As a result, since its establishment in 2008GC at Mekelle ICT business incubation center, RICTSP has shown many achievements. It has been providing its products and services to different bodies in the region and many customers in the country.</p>

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
              <i className="bi bi-css" />
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
              <i className="bi bi-chat-text-fill" />
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
              <i className="bi bi-people" />
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
  <section id="projects" className="featured-services section light-background py-5">
  {/* Section Title */}
  <div className="container section-title text-center mb-5">
    <h2>Projects</h2>
    <p>Here is a List of our Projects</p>
  </div>

  <div className="container">
    {/* Top Row: Text & Image */}


    {/* Bottom Grid Services */}
    <div className="row gy-4">
      {[
        {
          icon: "bi-cookie",
          title: "Addis Ababa Abattoir",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          number: "01"
        },
        {
          icon: "bi-bricks",
          title: "Yotek Construction PLC",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          number: "02"
        },
        {
          icon: "bi-tools",
          title: "Mesanu Metals Manufacturing PLC",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          number: "03"
        },
        {
          icon: "bi-bank",
          title: "Relief Society of Tigray",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          number: "04"
        },
        {
          icon: "bi-cash-coin",
          title: "Tensae International Business Enterprise",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          number: "05"
        },
        {
          icon: "bi-water",
          title: "Adwa Water Supply",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          number: "06"
        },
        {
          icon: "bi-box-arrow-in-down",
          title: "KA2 Import and Export",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          number: "07"
        },
        {
          icon: "bi-mortarboard-fill",
          title: "Poly Institute of Technology",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          number: "08"
        }
      ].map((service, idx) => (
        <div key={idx} className="col-sm-6 col-lg-3">
          <div className="service-card p-4 border rounded h-100">
            <div className="icon-box mb-3 fs-3 text-primary">
              <i className={`bi ${service.icon}`}></i>
            </div>
            <div className="content">
              <h5><a href="#" className="text-dark text-decoration-none">{service.title}</a></h5>
              <p className="mb-2">{service.text}</p>
              <div className="service-number text-muted fw-bold">{service.number}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  <section id="contact" className="contact section">
    {/* Section Title */}
    <div className="container section-title">
      <h2>Contact</h2>
      <p>Contact Us with the Following Informations</p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="contact-main-wrapper">
        <div className="contact-content">
          <div className="contact-form-container">
            <h3>Get in Touch</h3>
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
