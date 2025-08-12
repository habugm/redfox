
function Header() {
  return (
    <>
      <header id="header" className="header fixed-top">
  <div className="topbar d-flex align-items-center dark-background">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">redfoxdynamics@gmail.com</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+251 914 11 36 59</span></i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
      </div>
    </div>
  </div>{/* End Top Bar */}
  <div className="branding d-flex align-items-cente">
    <div className="container position-relative d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.webp" alt=""> */}
        {/* <h1 className="sitename">RedFox</h1> */}
        <img src="assets/img/misc/a.png" className="sitename" />
      </a>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          
          
          
          {/* Megamenu 2 */}
          <li className="megamenu-2"><a href="#services"><span>Services</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
            {/* Mobile Megamenu */}
            <ul className="mobile-megamenu">
              <li><a href="#">Product Analytics</a></li>
              <li><a href="#">Customer Insights</a></li>
              <li><a href="#">Market Research</a></li>
              <li className="dropdown"><a href="#"><span>EPR Software</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                <ul>
                  <li><a href="#">HRM</a></li>
                  <li><a href="#">Finance Management</a></li>
                  <li><a href="#">Project Management</a></li>
                  <li><a href="#">Document Management</a></li>
                  <li><a href="#">Business Intelligence</a></li>
                  <li><a href="#">Integration Platform</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#"><span>Development Tools</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                <ul>
                  <li><a href="#">Code Editors</a></li>
                  <li><a href="#">Version Control</a></li>
                  <li><a href="#">Testing Frameworks</a></li>
                  <li><a href="#">Deployment Tools</a></li>
                  <li><a href="#">API Management</a></li>
                  <li><a href="#">Performance Monitoring</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#"><span>Creative Suite</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                <ul>
                  <li><a href="#">Design Software</a></li>
                  <li><a href="#">Video Editing</a></li>
                  <li><a href="#">Audio Production</a></li>
                  <li><a href="#">Animation Tools</a></li>
                  <li><a href="#">Photo Editing</a></li>
                  <li><a href="#">3D Modeling</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#"><span>Resources</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                <ul>
                  <li><a href="#">Documentation</a></li>
                  <li><a href="#">Tutorials</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Blog Posts</a></li>
                </ul>
              </li>
            </ul>{/* End Mobile Megamenu */}
            {/* Desktop Megamenu */}
            <div className="desktop-megamenu">
              <div className="tab-navigation">
                <ul className="nav nav-tabs flex-column" id="2190-megamenu-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="2190-tab-1-tab" data-bs-toggle="tab" data-bs-target="#2190-tab-1" type="button" role="tab" aria-controls="2190-tab-1" aria-selected="true">
                      <i className="bi bi-code-slash" />
                      <span>ERP Software</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="2190-tab-2-tab" data-bs-toggle="tab" data-bs-target="#2190-tab-2" type="button" role="tab" aria-controls="2190-tab-2" aria-selected="false">
                      <i className="bi bi-brilliance" />
                      <span>Web Development</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="2190-tab-3-tab" data-bs-toggle="tab" data-bs-target="#2190-tab-3" type="button" role="tab" aria-controls="2190-tab-3" aria-selected="false">
                      <i className="bi bi-slack" />
                      <span>IT Infrastracture</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="2190-tab-4-tab" data-bs-toggle="tab" data-bs-target="#2190-tab-4" type="button" role="tab" aria-controls="2190-tab-4" aria-selected="false">
                      <i className="bi bi-telephone-inbound-fill" />
                      <span>ERP Consultancy</span>
                    </button>
                  </li>
                  
                </ul>
              </div>
              <div className="tab-content">
                {/* Enterprise Software Tab */}
                <div className="tab-pane fade show active" id="2190-tab-1" role="tabpanel" aria-labelledby="2190-tab-1-tab">
                  <div className="content-grid">
                    <div className="product-section">
                      <h4>Core Modules</h4>
                      <div className="product-list">
                        <a href="#" className="product-link">
                          <i className="bi bi-peopler" />
                          <div>
                            <span>(HRMS) Human Resource Management System</span>
                            <small>Manage customer relationships effectively</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-cash-coin" />
                          <div>
                            <span>(IFMS) Integrated Finance Management System</span>
                            <small>Integrate all business processes</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-building-check" />
                          <div>
                            <span>(AIMS) Asset and Inventory Management System</span>
                            <small>Streamline repetitive tasks</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-cash-stack" />
                          <div>
                            <span>(PBMS) Plan and Budget Management System</span>
                            <small>Streamline repetitive tasks</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-truck" />
                          <div>
                            <span>(PSMS) Purchase and Supplies Management System</span>
                            <small>Streamline repetitive tasks</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-graph-up" />
                          <div>
                            <span>(MSMS) Marketing and Sales Management System</span>
                            <small>Streamline repetitive tasks</small>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="product-section">
                      <h4>Cont...</h4>
                      <div className="product-list">
                        <a href="#" className="product-link">
                          <i className="bi bi-calendar-check" />
                          <div>
                            <span>(CPMS) Collaboration Project Management System</span>
                            <small>Organize and secure documents</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-gear-fill" />
                          <div>
                            <span>(IPMS) Integrated Production Management System</span>
                            <small>Make data-driven decisions</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-diagram-3" />
                          <div>
                            <span>(CCMS) Customer Chain Management System </span>
                            <small>Connect all your systems</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-tools" />
                          <div>
                            <span>(PEMS) Plant and Equipment Management System</span>
                            <small>Connect all your systems</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-clipboard-check" />
                          <div>
                            <span>(PCMS) Planning and Content Management System</span>
                            <small>Connect all your systems</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-person-workspace" />
                          <div>
                            <span>(SDMS) Slaughtering and Distribution Management System</span>
                            <small>Connect all your systems</small>
                          </div>
                        </a>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                {/* Development Tools Tab */}
                <div className="tab-pane fade" id="2190-tab-2" role="tabpanel" aria-labelledby="2190-tab-2-tab">
                  <div className="content-grid">
                    <div className="product-section">
                      <h4>Core Modules</h4>
                      <div className="product-list">
                        <a href="#" className="product-link">
                          <i className="bi bi-code-square" />
                          <div>
                            <span>Server-side Scripting/Application Logic</span>
                            <small>Advanced development environment</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-git" />
                          <div>
                            <span>Database Management</span>
                            <small>Track changes and collaborate</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-check2-square" />
                          <div>
                            <span>Content Management System (CMS) Components</span>
                            <small>Ensure code quality</small>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="product-section">
                      <h4>Cont...</h4>
                      <div className="product-list">
                        <a href="#" className="product-link">
                          <i className="bi bi-cloud-upload" />
                          <div>
                            <span>User Authentication and Authorization</span>
                            <small>Seamless application deployment</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-api" />
                          <div>
                            <span>Templating Engine</span>
                            <small>Design and manage APIs</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-speedometer2" />
                          <div>
                            <span>Routing and URL Handling</span>
                            <small>Track application performance</small>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="featured-banner">
                    <div className="banner-content">
                      <img src="assets/img/misc/a.png" alt="Development Tools" className="banner-image" />
                      <div className="banner-info">
                        <h5>REDFOX Dynamics</h5>
                        <p>Complete toolkit for modern development teams with integrated CI/CD pipelines.</p>
                        </div>
                    </div>
                  </div>
                </div>
                {/* Creative Suite Tab */}
                <div className="tab-pane fade" id="2190-tab-3" role="tabpanel" aria-labelledby="2190-tab-3-tab">
                  <div className="content-grid">
                    <div className="product-section">
                      <h4>Core Tasks</h4>
                      <div className="product-list">
                        <a href="#" className="product-link">
                          <i className="bi bi-brush" />
                          <div>
                            <span>Assessing Needs</span>
                            <small>Professional graphic design tools</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-camera-video" />
                          <div>
                            <span>Planning Strategically</span>
                            <small>Professional video production</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-image" />
                          <div>
                            <span>Implementing Security Measures</span>
                            <small>Advanced image manipulation</small>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="product-section">
                      <h4>Cont...</h4>
                      <div className="product-list">
                        <a href="#" className="product-link">
                          <i className="bi bi-music-note" />
                          <div>
                            <span>Managing Costs</span>
                            <small>Professional audio editing</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-play-circle" />
                          <div>
                            <span>Ensuring Scalability</span>
                            <small>Create stunning animations</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-box" />
                          <div>
                            <span>Prioritizing Maintenance and Updates</span>
                            <small>Advanced 3D design software</small>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="featured-banner">
                    <div className="banner-content">
                      <img src="assets/img/misc/a.png" alt="Creative Suite" className="banner-image" />
                      <div className="banner-info">
                        <h5>REDFOX Dynamics</h5>
                        <p>Everything you need for creative projects, from concept to final production.</p>
                        </div>
                    </div>
                  </div>
                </div>
                {/* Resources Tab */}
                <div className="tab-pane fade" id="2190-tab-4" role="tabpanel" aria-labelledby="2190-tab-4-tab">
                  <div className="content-grid">
                    <div className="product-section">
                      <h4>Core Tasks</h4>
                      <div className="product-list">
                        <a href="#" className="product-link">
                          <i className="bi bi-brush" />
                          <div>
                            <span>Needs Analysis</span>
                            <small>Professional graphic design tools</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-camera-video" />
                          <div>
                            <span>System Selection</span>
                            <small>Professional video production</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-image" />
                          <div>
                            <span>Implementation</span>
                            <small>Advanced image manipulation</small>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="product-section">
                      <h4>Cont...</h4>
                      <div className="product-list">
                        <a href="#" className="product-link">
                          <i className="bi bi-music-note" />
                          <div>
                            <span>Customization</span>
                            <small>Professional audio editing</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-play-circle" />
                          <div>
                            <span>Training</span>
                            <small>Create stunning animations</small>
                          </div>
                        </a>
                        <a href="#" className="product-link">
                          <i className="bi bi-box" />
                          <div>
                            <span>Support</span>
                            <small>Advanced 3D design software</small>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="featured-banner">
                    <div className="banner-content">
                      <img src="assets/img/misc/a.png" alt="Creative Suite" className="banner-image" />
                      <div className="banner-info">
                        <h5>REDFOX Dynamics</h5>
                        <p>Everything you need for creative projects, from concept to final production.</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* End Desktop Megamenu */}
          </li>{/* End Megamenu 2 */}
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
      </nav>
    </div>
  </div>
</header>

    </>
  );
}

export default Header;
