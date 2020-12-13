import React, { Component } from 'react';
import Navbar from '../../Layout/NavBar/Navbar'
import axios from 'axios'

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }


  

  render() {
    return (
      <div>
        <div>
      <Navbar/>
      <div>
        <h1>Contact Me:</h1>
        <form id='contact-form' onSubmit={this.submitEmail.bind(this)} method="POST">
          <div className='form-group'>
            <input placeholder="Name" id='name' type='text' className='form-control'
              required value={this.state.name} onChange={this.onNameChange.bind(this)} />
            <input placeholder='Email' id='email' type='email' className='form-control'
              aria-describedby='emailHelp' required value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
            <input placeholder='Subject' id='subject' type='text' className='form-control'
              required value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
            <textarea placeholder="Message" id='message' className='form-control'
              rows='1' required value={this.state.message} onChange={this.onMsgChange.bind(this)}/>
          </div>
          <button type='submit' className='submit-btn'>Submit</button>
        </form>
      </div>
    </div>
      </div>
    );
  }

  onNameChange(e) {
    this.setState({name: e.target.value})
  };
onEmailChange(e) {
    this.setState({email: e.target.value})
}
onSubjectChange(e) {
    this.setState({subject: e.target.value})
}
onMsgChange(e) {
    this.setState({message: e.target.value})
}
  
submitEmail(e){
  e.preventDefault();
  axios({
    method: "POST", 
    url:"http://localhost:3002/send", 
    data:  this.state
  }).then((response)=>{
    if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
    }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
    }
  })
}
resetForm(){
  this.setState({name: '', email: '',subject:'', message: ''})
}
}

export default Contact;