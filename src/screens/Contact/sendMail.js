var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

const contactform = nodemailer.createTransport({
  host: "smtp.gmail.com", //replace with your email provider
  port: 587,
  
  auth: {
    user: "daniellemendes.r@gmail.com", //replace with the email address
    pass: "Danimr29" //replace with the password
  }
});

// var transporter = nodemailer.createTransport()

// verify connection configuration
contactform.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
}); 

router.post('/send', (req, res) => {
  const name = req.body.name;
  const email = req.body.email
  const subject = req.body.subject
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `
  const mail = {
    from: name,
    to: 'daniellemendes.r@gmail.com',
    subject: "Contact Form Message",
text: content
  }
  contactform.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002, () => console.log("Server Running"))