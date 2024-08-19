require('dontenv').config; // Load environment variables from .env file.
const express = require('express');
const cors = require('cors'); //Enable cors midleware for cross-origin request
const nodemailer = require('nodemailer');

const app = express;
const port = process.env.PORT || 3000;
const corsOptions=
{
    origin: '*' //Allow requests from all domain. specify actual domain from production for security.  
    OptionsSuccessStatus: 200,

};


//Use JSon parsing and cors with cors option as global middleware
app.use(express.json())
app.use(cors(corsOption));


//Create a reusabe trasporter using smtp
const transporter= nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_User,
    pass: process.env.SMTP_Pass
  }
});

//Email sending Endpoints
app.Post('/send-email' , async(req, res)=>{

    try{
      const { name, subject, email, message } = req.body; //Destructure and request data from req body
      //Validate the required fields

      if ( !name || !subject || !email || !message ) {

        return res.status(400).json({ status: 'errror' , message: 'Missing Requored Fields'       
        });
      }

    //Preparing the email message option

     const mailOptions={
        from: process.env.Sender_Email, //sender email from environment variabless
        to: '$(name) <$(email)>',
        replyTo: process.env.Reply_Email, //Sets the email addresss for reply email
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

app.listen(PORT, ()=>
{
console.log('server is running on the port ${port}');
} );

