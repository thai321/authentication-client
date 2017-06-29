import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    console.log("this.props = ", this.props.email);
    console.log(email, password);
    // Need to do something to log user in
  }

  render() {
    // from reduxForm
    const { handleSubmit, fields: { email, password }} = this.props;
    // console.log("this.props = ", this.props);

    return (
      <form
        onSubmit={handleSubmit(this.handleFormSubmit)}
        >

        <fieldset className="form-group" >
          <label>Email:</label>
          <Field {...email} className="form-control" />
        </fieldset>

        <fieldset className="form-group" >
          <label>Password:</label>
          <Field {...password} className="form-control" />
        </fieldset>

        <button action="submit" className="btn btn-primary">Sign In</button>

      </form>
    );
  }
}


export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
