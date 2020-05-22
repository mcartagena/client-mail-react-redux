import React from "react";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { storeSentMail } from "../actions/sentMail.js";
import { storeDraftMail, deleteDraftMail } from "../actions/draft.js";

export class ComposeMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      from: "user@tcs.com",
      to: "",
      subject: "",
      time: "",
      body: "",
      error: false,
      valid: false,
      folder: "draft"
    };
 
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    this.submitOnSave = this.submitOnSave.bind(this);
    this.submitValidation = this.submitValidation.bind(this);

  }

  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ error: false });
    if (this.state.to !== "" && this.validateEmail(this.state.to)) {
      this.setState({ valid: true });
    } else {
      this.setState({ valid: false });
    }
  }
  validateEmail(email) {
    var re = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
    return re.test(String(email).toLowerCase());
  }

  submitValidation() {
    if (this.state.to !== "" && this.validateEmail(this.state.to)) {
      this.handleOnSubmit(this.state);
      this.setState({ valid: true });
    } else {
      this.setState({ valid: false });
    }
  }

  handleOnSubmit(composeData) {
    this.props.storeSentMail(composeData);
    if (this.props.compose.data.id) {
      this.props.deleteDraftMail(this.props.compose.data.id);
    }
  }

  submitOnSave() {  
    this.handleOnSave(this.state);
  }

  handleOnSave(composeData) {
    this.props.storeDraftMail(composeData);
  }

  componentDidMount() {
    this.setState({ id: this.props.compose.data.id });
    this.setState({ from: this.props.compose.data.from });
    this.setState({ to: this.props.compose.data.to });
    this.setState({ subject: this.props.compose.data.subject });
    this.setState({ time: this.props.compose.data.time });
    this.setState({ body: this.props.compose.data.body });
    if (
      this.props.compose.data.to !== "" &&
      this.validateEmail(this.props.compose.data.to)
    ) {
      this.setState({ valid: true });
    }
  }

  render() {
    

    return (
      <div>
        <div className="blur_background" />
        <div className="popup_inner">
          <div className="composemail">
            <form autoComplete="off">
              <div>
              <input
                  type="text"
                  id="to"
                  name="to"
                  placeholder="To.."
                  onChange={this.handleOnChange}
                  value={this.state.to}
                />                
              </div>
              <br />
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject.."
                  onChange={this.handleOnChange}
                  value={this.state.subject}
                />
              </div>
              <br />
              <div>
              <textarea
                  id="body"
                  name="body"
                  placeholder="Body.."
                  rows="4"
                  onChange={this.handleOnChange}
                  value={this.state.body}
                />
              </div>
              <br />
            </form>
            <div>
              <div>
                <NavLink to="/inbox">
                  <button className="closemail">x</button>
                </NavLink>
              </div>

              <NavLink
                className="composebtn"
                onClick={this.submitValidation}
                to={this.state.valid ? "/sent" : "/composemail"}
              >
                <button
                  type="submit"
                  className="btn-success pull-right composebtn"
                >
                  Send
                </button>
              </NavLink>

              <NavLink
                className="composebtn "
                to="/draft"
                onClick={this.submitOnSave}
              >
                <button
                  type="submit"
                  className="btn-success pull-middle composebtn"
                >
                  Save
                </button>
              </NavLink>
            </div>
            <br />
            <span className={(this.state.error ? "error" : "invisible")}>
              All fields are required
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  compose: state.compose
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { storeSentMail, storeDraftMail, deleteDraftMail },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ComposeMail);