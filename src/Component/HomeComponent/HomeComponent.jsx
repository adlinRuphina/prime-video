import React, { Component, Fragment } from 'react';
import './HomeComponent.style.css';
import { Link } from 'react-router-dom';
class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <section>
          <div className="form">
            <div className="Welcome">
              <h1 className="heading ">Welcome to Prime Video</h1>
              <h5 className="para ">
                Join Prime to watch the latest movies, TV shows and award-
                <br></br>
                winning Amazon Originals
              </h5>

              <button className="btn1  btn-light text-decoration-none text-capitalize">
                <Link to="/register"> Start your 30-day free trial </Link>
              </button>
            </div>
          </div>
          {/*second part*/}

          <div className="form2">
            <div className="Welcome2">
              <h1 className="heading2 ">Great Entertainment</h1>
              <h5 className="para2 ">
                With your Prime membership, you have access to exclusive
                <br></br> Amazon Originals, blockbuster Bollywood movies,
                regional<br></br> movies and more.
              </h5>

              <button className="btn2  btn-light text-decoration-none text-capitalize  ">
                <Link to="/login"> Get Started </Link>
              </button>
            </div>
          </div>
          {/*third part*/}
          <div className="form3">
            <div className="Welcome3">
              <h1 className="heading3 ">
                One membership, many
                <br></br> benefits
              </h1>
              <h5 className="para3 ">
                Your Prime membership now also includes ad-free music along
                <br></br>with unlimited free, fast delivery on eligible items,
                exclusive<br></br>
                access to deals more.
              </h5>

              <button className="btn3 btn-light text-decoration-none text-capitalize">
                <Link to="/login"> Get Started </Link>
              </button>
              <p className="info">
                *Go to amazon.in/prime for more information
              </p>
            </div>
          </div>
          {/*fourth part */}
          <div className="form4">
            <div className="Welcome4">
              <h1 className="heading4 ">Even better with Fire TV Stick</h1>
              <h5 className="para4 ">
                The biggest movies and TV shows are always better on a big
                <br></br>
                screen. Simply plug in your Amazon Fire TV Stick and stream on
                <br></br>
                any HDTV. Press the voice button on the remote and say the
                <br></br> name of the title you want to watch to find it in
                seconds.
              </h5>

              <button className="btn4 btn-light text-decoration-none text-capitalize ">
                <Link to="/login"> Get Started </Link>
              </button>
            </div>
          </div>
          {/*fourth part*/}
          <div>
            <div className="sectionform">
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Devices.jpg"
                  alt="img"
                />
                <h1>Watch anywhere</h1>
                <p>
                  Enjoy from the web or with the Prime Video<br></br> app on
                  your phone, tablet, or select Smart<br></br> TVs — on up to 3
                  devices at once.
                </p>
              </div>
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Download_IN.jpg"
                  alt="img"
                />
                <h1>Download and go</h1>
                <p>
                  Watch offline on the Prime Video app when <br></br>you
                  download titles to your iPhone, iPad,<br></br> Tablet, or
                  Android device.
                </p>
              </div>
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/300x300_Tile_1.png"
                  alt="img"
                />
                <h1>Data Saver</h1>
                <p>
                  Control data usage while downloading and<br></br> watching
                  videos on select phones or tablets.
                </p>
              </div>
            </div>
          </div>
          {/*fifth prt */}
          <div className="form5">
            <div className="Welcome5">
              <h1 className="heading5 ">Family Friendly</h1>
              <h5 className="para5 ">
                With easy to use Parental Controls and a dedicated kids page,
                <br></br>
                enjoy secure, ad-free kids entertainment. Kids can enjoy popular
                <br></br>
                TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
              </h5>

              <button className="btn5 btn-light text-decoration-none text-capitalize">
                <Link to="/login"> Get Started </Link>
              </button>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HomeComponent;
