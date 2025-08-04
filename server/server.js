require('dotenv').config(); // Load environment variables from .env file.
const express = require('express');
const cors = require('cors'); //Enable cors midleware for cross-origin request
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT;
const corsOptions=
{
    origin: '*', //Allow requests from all domain. specify actual domain from production for security.  
    optionsSuccessStatus : 200,

};


//Use JSon parsing and cors with cors option as global middleware
app.use(express.json());
app.use(cors(corsOptions));


//Create a reusabe trasporter using smtp
const transporter= nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

//Email sending Endpoints
app.post('/send-email' , async(req, res)=>{

    try{
      const { name, subject, email, message } = req.body; //Destructure and request data from req body
      //Validate the required fields

      if ( !name || !subject || !email || !message ) {

        return res.status(400).json({ status: 'errror' , message: 'Missing Required Fields'       
        });
      }

    //Preparing the email message option

     const mailOptions={
        from: process.env.SENDER_EMAIL, //sender email from environment variabless
        to: `${name} <${email}`, //receiver email from environment variable
        replyTo: process.env.REPLY_EMAIL, //Sets the email addresss for reply email
        subject: subject,
        text: message 
     };

     // Send Email and log response
      const info = await transporter.sendMail(mailOptions);
      console.log('Email_Sent:', info.response);
      res.status(200).json({status:'sucess', messsage: 'Email is sent sucessfully'});   

     }catch (err){
        //Handle eroor and log
        console.log('Error sending the email:', err);
        res.status(500).json({ status:'error', message:'Error sending the email. try again!'});
     }

});

//Start the server
app.listen(POST, () =>
{
console.log(`server is running on the port ${port}`);
} );

