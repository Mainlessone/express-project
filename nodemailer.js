const nodemailer = require('nodemailer');

function emailSender(name, email, phone) {

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'v4t@mail.com',
      pass: '222'
    }
  });

  let mailOptions = {
    from: 'vsmislenet@gmail.com',
    to: email,
    subject: 'Contacts',
    html: `Thanks for contacting us, ${name}! \n You can use following email and phone number to get intouch with us: 1111111@mail.com, 3333333333`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
module.exports.email = emailSender;
 