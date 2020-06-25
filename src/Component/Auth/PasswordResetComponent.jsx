import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import { toast } from 'react-toastify';
class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async handleSubmit(e) {
    let { email } = this.state;
    e.preventDefault();
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      this.props.history.push('/login');
      toast.success(`please verify ${email} and change password`);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      this.props.history.push('/password-reset');
    }
  }
  render() {
    return (
      <Fragment>
        <Fragment>
          <section className="vh-100 align-items-center justify-content-center d-flex registerComponent">
            <div className=" col-md-3 mx-auto">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
                alt="logo"
                className="inside_logo my-4"
              />

              <div className="card-body card">
                <h1 className="h4">Password Assistance</h1>
                <p style={{ fontSize: '12px' }}>
                  Enter the email address or mobile phone number<br></br>{' '}
                  associated with your Amazon account.
                </p>
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
                    <button className="a-button-primary btn-block my-4">
                      Continue
                    </button>
                  </div>
                  <hr />
                  <p style={{ fontSize: '18px' }}>
                    Has your email or mobile number changed?
                  </p>
                  <p style={{ fontSize: '12px' }}>
                    If you no longer use the email address associated with your
                    <br></br>
                    Amazon account, you may contact Customer Service for help
                    <br></br>
                    restoring access to your account.
                  </p>
                  <br></br>
                  <p>
                    <Link to="/login">Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </section>
        </Fragment>
      </Fragment>
    );
  }
}

export default PasswordReset;
