const Header = () => {
  return (
    <>
      <div className='header_section'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='logo' href='index.html'>
              <img src='images/logo.png' />
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                  <a className='nav-link' href='index.html'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='about.html'>
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='blog.html'>
                    Blog
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='repair.html'>
                    Repair
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='contact.html'>
                    Contact Us
                  </a>
                </li>
              </ul>
              <form className='form-inline my-2 my-lg-0'>
                <div className='search_icon'>
                  <a href='#'>
                    <img src='images/search-icon.png' />
                  </a>
                </div>
              </form>
            </div>
          </nav>
        </div>
        {/* banner section start */}
        <div className='banner_section layout_padding'>
          <div
            id='main_slider'
            className='carousel slide'
            data-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <h1 className='banner_taital'>
                        Tablates And Phons Repair Service
                      </h1>
                      <p className='banner_text'>
                        There are many variations of passages of Lorem
                        Ipsum available, but the majority have
                        suffered alteration
                      </p>
                      <div className='btn_main'>
                        <div className='read_bt'>
                          <a href='#'>Read More</a>
                        </div>
                        <div className='contact_bt active'>
                          <a href='#'>Contact US</a>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='image_1'>
                        <img src='images/img-1.png' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <h1 className='banner_taital'>
                        Tablates And Phons Repair Service
                      </h1>
                      <p className='banner_text'>
                        There are many variations of passages of Lorem
                        Ipsum available, but the majority have
                        suffered alteration
                      </p>
                      <div className='btn_main'>
                        <div className='read_bt'>
                          <a href='#'>Read More</a>
                        </div>
                        <div className='contact_bt active'>
                          <a href='#'>Contact US</a>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <div className='image_1'>
                        <img src='images/img-1.png' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <h1 className='banner_taital'>
                        Tablates And Phons Repair Service
                      </h1>
                      <p className='banner_text'>
                        There are many variations of passages of Lorem
                        Ipsum available, but the majority have
                        suffered alteration
                      </p>
                      <div className='btn_main'>
                        <div className='read_bt'>
                          <a href='#'>Read More</a>
                        </div>
                        <div className='contact_bt active'>
                          <a href='#'>Contact US</a>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='image_1'>
                        <img src='images/img-1.png' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className='carousel-control-prev'
              href='#main_slider'
              role='button'
              data-slide='prev'
            >
              <i className='fa fa-angle-left' />
            </a>
            <a
              className='carousel-control-next'
              href='#main_slider'
              role='button'
              data-slide='next'
            >
              <i className='fa fa-angle-right' />
            </a>
          </div>
        </div>
        {/* banner section end */}
      </div>
      {/* header section end */}
    </>
  );
};

export default Header;
