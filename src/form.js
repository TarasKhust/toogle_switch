import React from "react";
import Toggle from "./Toggle.component";

export default class Form extends React.Component {
  state = {
    checked: true,
    size: "default",
    disabled: false
  };

  handleChange = e => {
    this.setState({ checked: e.target.checked });
  };

  setSize(e) {
    this.setState(prevState => ({
      size: prevState.size === "default" ? "large" : "default"
    }));
  }

  setDisable(e) {
    this.setState(prevState => ({
      disabled: !prevState.disabled
    }));
  }

  render() {
    return (
      <form>
        <label htmlFor="size">
          <input type="checkbox" onChange={e => this.setSize(e)} id="size" />
          &nbsp;<small>Large</small>
        </label>
        <br />
        <label htmlFor="disable">
          <input
            type="checkbox"
            onChange={e => this.setDisable(e)}
            id="disable"
          />
          &nbsp;<small>Disable</small>
        </label>
        <hr />
        <Toggle
          checked={this.state.checked}
          text="Is Active"
          size={this.state.size}
          disabled={this.state.disabled}
          onChange={this.handleChange}
          offstyle="btn-danger"
          onstyle="btn-success"
        />
      </form>
    );
  }
}
