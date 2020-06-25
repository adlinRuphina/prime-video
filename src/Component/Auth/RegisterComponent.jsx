import React, { Component, Fragment } from 'react';
import './Auth.style.css';
import md5 from 'md5';
import { Link, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import firebase from '../../firebase';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      confirm_password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    try {
      let { email, password, username, phonenumber } = this.state;
      e.preventDefault();
      let userData = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      userData.user.sendEmailVerification(); //sending mail to verify
      let message = `this is verfication ${email} pls check it is already register`;
      toast.success(message);
      this.props.history.push('/login');
      //update
      await userData.user.updateProfile({
        displayName: username,
        photoURL: `https://www.gravatar.com/${md5(
          userData.user.email
        )}?d=identicon`,
      });

      //storage option
      firebase
        .database()
        .ref()
        .child('users' + userData.user.uid)
        .set({
          username: userData.user.displayName,
          photoURL: userData.user.photoURL,
          email: userData.user.email,
          uid: userData.user.uid,
          registrationDate: new Date().toString(),
        });
      this.setState({
        username: '',
        password: '',
        email: '',
        confirm_password: '',
      });
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  }

  render() {
    return (
      <Fragment>
        <section className="registerComponent">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
            alt="logo"
            className="inside_logo my-2"
          />
          <div className=" card col-md-4 mx-auto  ">
            <h1 className="h4 ">Create Account</h1>
            <div className="cardbody">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    required
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="username">Email</label>
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
                  <label htmlFor="username">password</label>
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
                  <label htmlFor="username">password confirm</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirm_password"
                    name="confirm_password"
                    required
                    value={this.state.confirm_password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <button className="a-button-primary  btn-block my-4">
                    create your amazon account
                  </button>
                </div>
                <hr />
                <p>
                  By creating an account, you agree to Amazon's Conditions of
                  Use and Privacy Notice.
                </p>
                <p>
                  Already have an account? <Link to="/login">Sign-In</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(Register);
