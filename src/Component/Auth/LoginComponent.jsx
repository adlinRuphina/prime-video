import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import md5 from 'md5';
import { toast } from 'react-toastify';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async handleSubmit(e) {
    let { email, password } = this.state;
    e.preventDefault();
    //  console.log(this.state); //to check react form  working or not
    //firebase
    try {
      let userData = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (userData.user.emailVerified) {
        //to check verified or not
        this.props.history.push('/');
        let message = 'successfull login';
        toast.success(message);
      } else {
        let message = `${email} not verified pls check ${email} and verify`;
        toast.error(message); //custom error
      }
      this.setState({
        username: '',
        password: '',
        email: '',
      });
    } catch (err) {
      console.log(err);
      toast.error(err.message); //firebase error
    }
  }

  render() {
    return (
      <Fragment>
        <section className="vh-100 align-items-center justify-content-center d-flex registerComponent">
          <div className=" col-md-3 mx-auto">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
              alt="logo"
              className="inside_logo my-4"
            />

            <div className="card-body card">
              <h1 className="h4">Sign in</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <span className="float-right">
                    <Link to="/password-reset">Forgot Password</Link>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <button className="a-button-primary btn-block my-4">
                    Sign in
                  </button>
                </div>
                <hr />
                <p style={{ fontSize: '12px' }}>
                  By continuing, you agree to Amazon's Conditions of Use and
                  Privacy Notice.
                </p>
                <br></br>
                <span>New to amazon?</span>
                <p>
                  <Link to="/register">create your amazon account</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(Login);
