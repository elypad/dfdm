
const sgMail = require('@sendgrid/mail');
var express = require('express')
var app = express()
// app.listen(3000)

app.get('/', function (req, res) {
  res.send("Direct From Dubai Email Center")
})

app.get('/signup/:receiver/:message', function (req, res) {

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: req.params.receiver,
      from: 'elkanarop@gmail.com',
      subject: 'DFD Test Email',
      // text: 'and easy to do anywhere, even with Node.js',
      html: `<strong>${req.params.message}</strong>`,
    };

   sgMail.send(msg).catch( err=>{
    console.log(error)
  }).then( response=> {
    return res.send(response)
  })
})

