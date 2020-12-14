

import React from "react";
import Footer from "../../Layout/Footer/Footer";
import './contact.css'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className='contact-div'>
        
      <form
       className='contact-form'
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mdopwpyj"
        method="POST"
        >
          <h1>Contact me:</h1>
          <div className='form-input'>
          <label>FULL NAME:</label>
            <input type='text' name='name' />
          </div>
          <div className='form-input'>
        <label>EMAIL ADDRESS:</label>
            <input type="email" name="email" />
          </div>
          <div className='message-input'>
        <label>YOUR MESSAGE:</label>
            <textarea
              className='message-box-input'
              type="text"
              rows='5'
              cols='40'
              name="message"></textarea>
          </div>
          <div className='btn'>
        {status === "SUCCESS" ? <p className='cfm-txt'>Thanks!</p> : <button className='btn-form'>Submit</button>}
        {status === "ERROR" && <p className='cfm-txt'>Ooops! There was an error.</p>}
          </div>
        </form>
        <Footer/>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}