// import all css 
import '../assets/css/bootstrap.css'
import '../assets/css/virtual.css'
import '../assets/css/maicons.css'
import '../assets/css/minibar.virtual.css'
import '../assets/css/themify-icons.css'
import '../assets/css/topbar.virtual.css'
import '../assets/vendor/animate/animate.css'
import '../assets/vendor/owl-carousel/owl.carousel.css'
import '../assets/vendor/fancybox/css/jquery.fancybox.min.css'
import '../assets/vendor/nice-select/css/nice-select.css'


// import all images
import Person from "../assets/img/AryaBandhuPic.jpg"
import BackgroundImage from "../assets/img/bgimage2.jpg"
import Photo2 from "../assets/img/photo-2.jpg"
import Work1 from "../assets/img/work/work-1.jpg"
import Work2 from "../assets/img/work/work-2.jpg"
import Work3 from "../assets/img/work/work-3.jpg"
import Work4 from "../assets/img/work/work-4.jpg"
import Work5 from "../assets/img/work/work-5.jpg"
import Work6 from "../assets/img/work/work-6.jpg"

import Work9 from "../assets/img/work/work-9.jpg"
import Favicon from "../assets/favicon.ico"





function index() {


  return (
    <>

      <div className="theme-blue">
        {/* <!-- Back to top button --> */}
        <div className="btn-back_to_top">
          <span className="ti-arrow-up"></span>
        </div>

        <div className="topbar-nav fixed-top">
          <div className="brand">
            <img src={Favicon} alt="" width="30" height="30" />
          </div>
          <h3 className="ml-1">Gram</h3>
          <button className="btn-fab toggle-menu mr-3"><span className="ti-menu"></span></button>
        </div>

        {/* Minibar  */}
        <div className="minibar">
          <div className="header">
            <div className="brand">

            </div>
          </div>
          <div className="content">
            <ul className="main-menu">
              <li className="menu-item active">
                <a href="#home" className="menu-link">
                  <span className="icon ti-home"></span>
                  <span className="caption">Home</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#about" className="menu-link">
                  <span className="icon ti-user"></span>
                  <span className="caption">About</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#services" className="menu-link">
                  <span className="icon ti-file"></span>
                  <span className="caption">Service</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#portfolio" className="menu-link">
                  <span className="icon ti-briefcase"></span>
                  <span className="caption">Portfolio</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#blog" className="menu-link">
                  <span className="icon ti-book"></span>
                  <span className="caption">Blog</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#contact" className="menu-link">
                  <span className="icon ti-location-pin"></span>
                  <span className="caption">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="vg-main-wrapper">
          <div className="vg-page page-home" id="home" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="caption wow zoomInUp">
              <h1 className="fw-normal">Welcome</h1>
              <h2 className="fw-medium fg-theme">I&apos;m Arya Bandhu</h2>
              <p className="tagline">Full Stack Developer</p>
            </div>
          </div>

          {/* <!-- Page About --> */}
          <div className="vg-page page-about" id="about">

            {/* <!-- Profile --> */}
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="img-place wow zoomIn">
                    <img src={Person} alt="Photo Profile" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="caption wow fadeInRight">
                    <h2 className="fg-dark">Arya Bandhu</h2>
                    <p className="fg-theme fw-medium">Full Stack Developer</p>
                    <p>I am passionate about my work, I like to code and learn new things and skills.</p>
                    <ul className="theme-list">
                      <li className="fg-dark"><b>From:</b> Uttakhand, India</li>
                      <li className="fg-dark"><b>Lives In:</b> Dehradun</li>
                      <li className="fg-dark"><b>Age:</b> 21</li>
                      <li className="fg-dark"><b>Gender:</b> Male</li>
                    </ul>
                    <button className="btn btn-theme btn-rounded">Download CV</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End profile --> */}

            {/* <!-- Skills --> */}
            <div className="container mt-5">
              <h1 className="text-center fg-dark wow fadeInUp">My Skills</h1>
              <div className="row py-3">
                <div className="col-md-6">
                  <h4 className="wow fadeInUp">Coding skills</h4>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">JavaScript</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "85%", ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100" }}>85%</div>
                    </div>
                  </div>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">PHP</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "70%", ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100" }}>70%</div>
                    </div>
                  </div>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">HTML + CSS</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "95%", ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "95" }}>100%</div>
                    </div>
                  </div>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">React js</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "60%", ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100" }}>60%</div>
                    </div>
                  </div>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">Wordpress</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "90%", ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100" }}>90%</div>
                    </div>
                  </div>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">Logo Design</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "100%", ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100" }}>100%</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="wow fadeInUp">Another Skills</h4>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">Team Leadership</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "92%", ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100" }}>92%</div>
                    </div>
                  </div>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">Confidence</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "99%", ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100" }}>99%</div>
                    </div>
                  </div>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">Time & Work Management</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "90%", ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100" }}>90%</div>
                    </div>
                  </div>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">Github</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "80%", ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100" }}>80%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End skills --> */}

            {/* <!-- Resume --> */}
            <div className="container pt-5">
              <div className="row">
                <div className="col-md-6 wow fadeInRight">
                  <h2 className="fg-dark">Education</h2>
                  <ul className="timeline mt-4 pr-md-5">
                    <li>
                      <div className="title">2021 - 2025</div>
                      <div className="details">
                        <h5>B.tech in Computer Science</h5>
                        <small className="fg-theme">Tula&apos;s Institute, Dehradun Uttrakhand</small>
                        <p>Affiliated to Uttarakhand Technical University , Approved by AICTE, Ministry of HRD, Govt of India , NAAC A+ & NBA also</p>
                      </div>
                    </li>
                    <li>
                      <div className="title">2019 - 2021</div>
                      <div className="details">
                        <h5>Diploma in Computer Science</h5>
                        <small className="fg-theme">Digamber Jain Engineering Institute</small>
                        <p>institute are recognised by The Board of Technical Education U.P. Lucknow, and approved by AICTE, New Delhi.</p>
                      </div>
                    </li>
                    <li>
                      <div className="title">2018</div>
                      <div className="details">
                        <h5>Intermediate 12th</h5>
                        <small className="fg-theme">Arya Vidyalaya Inter College , Tera Baghpat</small>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                          suffered</p>
                      </div>
                    </li>
                    <li>
                      <div className="title">2016</div>
                      <div className="details">
                        <h5>High School 10th</h5>
                        <small className="fg-theme">Arya Vidyalaya Inter College , Tera Baghpat</small>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                          suffered</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
                  <h2 className="fg-dark">Experience & Certification</h2>
                  <ul className="timeline mt-4 pr-md-5">
                    <li>
                      <div className="title">2020 - Current</div>
                      <div className="details">
                        <h5>Freelancer</h5>
                        <small className="fg-theme"></small>
                        <p>I am a freelancer who takes on projects to create custom websites for individuals and businesses.</p>
                      </div>
                    </li>
                    <li>
                      <div className="title">2024</div>
                      <div className="details">
                        <h5>Web Development Certificate</h5>
                        <small className="fg-theme">By Tula&apos;s Instute Dehradun</small>
                        <p>From January 23rd to March 10th, I successfully completed a three-month intensive web development course organized by Tula&apos;s Institute, Dehradun.</p>
                      </div>
                    </li>
                    <li>
                      <div className="title">2023</div>
                      <div className="details">
                        <h5>JavaScript Intermediate Certification</h5>
                        <small className="fg-theme">By Solo Learn</small>
                        <p>the JavaScript Intermediate course on SoloLearn, showcasing my expertise in advanced JavaScript concepts.</p>
                      </div>
                    </li>
                    <li>
                      <div className="title">For More Achivements</div>
                      <div className="details">
                        <h5>View Linkedin Profile & Github Profile</h5>
                        <small className="fg-theme"></small>
                        <p> <a href="https://www.linkedin.com/in/arya-bandhu/recent-activity/all/">Click Here</a> </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- End resume --> */}

          </div>
          {/* page About End  */}

          {/* <!-- Page Service --> */}
          <div className="vg-page page-service" id="services" style={{ backgroundColor: "#171925", color: "#9FA2AB" }}>
            <h1 className="text-center wow fadeInUp">Services</h1>
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-4 wow fadeInUp">
                  <div className="card card-body">
                    <div className="iconic">
                      <span className="ti-layout"></span>
                    </div>
                    <h4 className="fg-theme">Webite Development</h4>
                    <p>I create custom websites for individuals and businesses.</p>
                    <a href="#" className="btn btn-theme btn-rounded">Read More</a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp">
                  <div className="card card-body">
                    <div className="iconic">
                      <span className="ti-announcement"></span>
                    </div>
                    <h4 className="fg-theme">SEO</h4>
                    <p> I provide SEO services to enhance your website&apos;s visibility and performance.</p>
                    <a href="#" className="btn btn-theme btn-rounded">Read More</a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp">
                  <div className="card card-body">
                    <div className="iconic">
                      <span className="ti-desktop"></span>
                    </div>
                    <h4 className="fg-theme">Web Development</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                      been the industry standard</p>
                    <a href="#" className="btn btn-theme btn-rounded">Read More</a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp">
                  <div className="card card-body">
                    <div className="iconic">
                      <span className="ti-layout"></span>
                    </div>
                    <h4 className="fg-theme">Web Design</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                      been the industry standard</p>
                    <a href="#" className="btn btn-theme btn-rounded">Read More</a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp">
                  <div className="card card-body">
                    <div className="iconic">
                      <span className="ti-announcement"></span>
                    </div>
                    <h4 className="fg-theme">SEO</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                      been the industry standard</p>
                    <a href="#" className="btn btn-theme btn-rounded">Read More</a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp">
                  <div className="card card-body">
                    <div className="iconic">
                      <span className="ti-desktop"></span>
                    </div>
                    <h4 className="fg-theme">Web Development</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                      been the industry standard</p>
                    <a href="#" className="btn btn-theme btn-rounded">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End page services --> */}

          {/* <!-- Testimonials --> */}
          <div className="vg-page p-0" id="testimonial">
            <div className="owl-carousel testi-carousel" style={{ backgroundImage: `url(${Photo2})` }}>
              <div className="item">
                <p>Programming is the art of algorithm design and the craft of debugging errant code.</p>
                <span className="iconic">
                  <span className="ti-quote-left"></span>
                </span>
                <h4>– Ellen Ullman</h4>
              </div>
              <div className="item">
                <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
                <span className="iconic">
                  <span className="ti-quote-left"></span>
                </span>
                <h4>― Martin Fowler</h4>
              </div>
              <div className="item">
                <p>You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity.</p>
                <span className="iconic">
                  <span className="ti-quote-left"></span>
                </span>
                <h4>– John Romero</h4>
              </div>
            </div>
          </div>
          {/* <!-- End testimonial --> */}

          {/* <!-- Portfolio page --> */}
          <div className="vg-page page-portfolio" id="portfolio">
            <div className="container">
              <div className="text-center wow fadeInUp">
                <div className="badge badge-subhead">Portfolio</div>
              </div>
              <h1 className="text-center fw-normal wow fadeInUp">See my work</h1>
              <div className="filterable-button py-3 wow fadeInUp" data-toggle="selected">
                <button className="btn btn-theme-outline selected" data-filter="*">All</button>
                <button className="btn btn-theme-outline" data-filter=".apps">Apps</button>
                <button className="btn btn-theme-outline" data-filter=".template">Template</button>
                <button className="btn btn-theme-outline" data-filter=".ios">IOS</button>
                <button className="btn btn-theme-outline" data-filter=".ui-ux">UI/UX</button>
                <button className="btn btn-theme-outline" data-filter=".graphic">Graphic</button>
                <button className="btn btn-theme-outline" data-filter=".wireframes">Wireframes</button>
              </div>

              <div className="gridder my-3">
                <div className="grid-item apps wow zoomIn">
                  <div className="img-place" data-src={Work1} data-fancybox data-caption="<h5 className='fg-theme'>Mobile Travel App</h5> <p>Travel, Discovery</p>">
                    <img src={Work1} alt="" />
                    <div className="img-caption">
                      <h5 className="fg-theme">Mobile Travel App</h5>
                      <p>Travel, Discovery</p>
                    </div>
                  </div>
                </div>
                <div className="grid-item template wireframes wow zoomIn">
                  <div className="img-place" data-src={Work2} data-fancybox data-caption="<h5 className='fg-theme'>Music App</h5> <p>Musics</p>">
                    <img src={Work2} alt="" />
                    <div className="img-caption">
                      <h5 className="fg-theme">Music App</h5>
                      <p>Musics</p>
                    </div>
                  </div>
                </div>
                <div className="grid-item apps ios wow zoomIn">
                  <div className="img-place" data-src={Work3} data-fancybox data-caption="<h5 className='fg-theme'>Gaming Dashboard</h5> <p>Games, Streaming</p>">
                    <img src={Work3} alt="" />
                    <div className="img-caption">
                      <h5 className="fg-theme">Gaming Dashboard</h5>
                      <p>Games, Streaming</p>
                    </div>
                  </div>
                </div>
                <div className="grid-item graphic ui-ux wow zoomIn">
                  <div className="img-place" data-src={Work4} data-fancybox data-caption="<h5 className='fg-theme'>Drugs Delivery App</h5> <p>Health, Drugs</p>">
                    <img src={Work4} alt="" />
                    <div className="img-caption">
                      <h5 className="fg-theme">Drugs Delivery App</h5>
                      <p>Health, Drugs</p>
                    </div>
                  </div>
                </div>
                <div className="grid-item apps ios wow zoomIn">
                  <div className="img-place" data-src={Work5} data-fancybox data-caption="<h5 className='fg-theme'>Musics Discover</h5> <p>Musics, Dashboard</p>">
                    <img src={Work5} alt="" />
                    <div className="img-caption">
                      <h5 className="fg-theme">Musics Discover</h5>
                      <p>Musics, Dashboard</p>
                    </div>
                  </div>
                </div>
                <div className="grid-item graphic ui-ux wireframes wow zoomIn">
                  <div className="img-place" data-src={Work6} data-fancybox data-caption="<h5 className='fg-theme'>Game Streaming</h5> <p>Games, Streaming</p>">
                    <img src={Work6} alt="" />
                    <div className="img-caption">
                      <h5 className="fg-theme">Game Streaming</h5>
                      <p>Games, Streaming</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End gridder --> */}
              <div className="text-center wow fadeInUp">
                <a href="javascript:void(0)" className="btn btn-theme">Load More</a>
              </div>
            </div>
          </div>
          {/* <!-- End Portfolio page --> */}

          {/* <!-- Page Blog --> */}
          <div className="vg-page page-blog" id="blog">
            <h1 className="text-center fg-dark wow fadeInUp">Latest Post</h1>
            <div className="container">
              <div className="row post-grid">
                <div className="col-md-6 col-lg-4 wow fadeInUp">
                  <div className="card">
                    <div className="img-place">
                      <img src={Work9} alt="" />
                    </div>
                    <div className="caption">
                      <a href="javascript:void(0)" className="post-category">Technology</a>
                      <a href="#" className="post-title">Invision design forward fund</a>
                      <span className="post-date"><span className="sr-only">Published on</span> May 22, 2018</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp">
                  <div className="card">
                    <div className="img-place">
                      <img src={Work6} alt="" />
                    </div>
                    <div className="caption">
                      <a href="javascript:void(0)" className="post-category">Business</a>
                      <a href="#" className="post-title">Announcing a plan for small teams</a>
                      <span className="post-date"><span className="sr-only">Published on</span> May 22, 2018</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp">
                  <div className="card">
                    <div className="img-place">
                      <img src={Work1} alt="" />
                    </div>
                    <div className="caption">
                      <a href="javascript:void(0)" className="post-category">Design</a>
                      <a href="#" className="post-title">5 basic tips for illustrating</a>
                      <span className="post-date"><span className="sr-only">Published on</span> May 22, 2018</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center py-3 wow fadeInUp">
                  <a href="blog-minibar.html" className="btn btn-theme">See All Post</a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End page blog --> */}

          {/* <!-- Page Contact --> */}
          <div className="vg-page page-contact" id="contact">
            <h1 className="text-center fg-dark wow fadeInUp">Contact</h1>
            <div className="container-fluid">
              <div className="row py-5">
                <div className="col-lg-7 wow zoomIn">
                  <div className="vg-maps">
                    <div id="google-maps" style={{ width: "100%", height: "100%" }}></div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <form className="vg-contact-form">
                    <div className="form-row">
                      <div className="col-12 wow fadeInUp">
                        <input className="form-control" type="text" name="Name" placeholder="Your Name" />
                      </div>
                      <div className="col-6 wow fadeInUp">
                        <input className="form-control" type="text" name="Email" placeholder="Email Address" />
                      </div>
                      <div className="col-6 wow fadeInUp">
                        <input className="form-control" type="text" name="Subject" placeholder="Subject" />
                      </div>
                      <div className="col-12 wow fadeInUp">
                        <textarea className="form-control" name="Message" rows="6" placeholder="Enter message here.."></textarea>
                      </div>
                      <button type="submit" className="btn btn-theme mt-3 wow fadeInUp ml-1">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End page contact --> */}

          {/* <!-- Footer --> */}
          <div className="vg-footer">
            <h1 className="text-center">Find me</h1>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 py-3">
                  <div className="footer-info">
                    <p>Where to find me</p>
                    <hr className="divider" />
                    <p className="fs-large fg-white">Near to Tula&apos;s Institute , Dhoolkote , Dehradun , Uttrakhnad India</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 py-3">
                  <div className="float-lg-right">
                    <p>Follow me</p>
                    <hr className="divider" />
                    <ul className="list-unstyled">
                      <li><a href="https://www.instagram.com/arya_bandhu">Instagram</a></li>
                      <li><a href="https://www.linkedin.com/in/arya-bandhu">Linkedin</a></li>
                      <li><a href="https://github.com/AryaBandhu">Github</a></li>
                      <li><a href="https://www.hackerrank.com/profile/aryabandhu3">Hackerrank</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 py-3">
                  <div className="float-lg-right">
                    <p>Contact me</p>
                    <hr className="divider" />
                    <ul className="list-unstyled">
                      <li>aryabandhu3@gmail.com</li>
                      {/* <li>+8890234</li>
                      <li>+813023</li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-12 mb-3">
                  <h3 className="fw-normal text-center">Subscribe</h3>
                </div>
                <div className="col-lg-6">
                  <form className="mb-3">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Email address" />
                      <input type="submit" className="btn btn-theme no-shadow" value="Subscribe" />
                    </div>
                  </form>
                </div>
                <div className="col-12">
                  <p className="text-center mb-0 mt-4">Copyright &copy;2024. All right reserved | This Profile is made by <span className="ti-heart fg-theme-red"></span> by <a href="#">Arya Bandhu</a></p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End footer --> */}
        </div>
      </div>
    </>

  );
}

export default index;
