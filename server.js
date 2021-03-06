// // // 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 
// // const sgmail = require('@sendgrid/mail');
// // sgmail.setApiKey('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');
// // const msg = {
// //     to: '72670394my@gmail.com',
// //     from: 'pandeysaloni4july@gmail.com',
// //     subject: 'Testing the email service',
// //     text: 'this is a good boy',
// // };

// // sgmail.send(msg,(err,info) => {
// //     if(err){
// //         console.log('email not send');33
// //     } else {
// //         console.log('email send successfully');
// //     }
// // })

// const path = require('path');
// const sendmail = require('./utils/sendEmail')
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
// app.use(express.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname,'../public')));
// app.set('view engine','ejs');

// app.get('/',(req,res) => {
//     res.render('contact');
// })
// app.get('/send',(req,res)=>{
//     res.render('send')
// })

// app.post('/sendemail',(req,res) => {
//     const {name, surname,email} = req.body;
//     // const from = '72670394my@gmail.com';
//     const to = 'pandeysaloni4july@gmail.com';
//     const from = '72670394my@gmail.com';
//     const subject = 'New Contact Request'
//     const output = `
//       <p>You have a new Contact Request</p>
//       <h3>Contact Details</h3>
//       <ul>
//         <li>Name:${name}</li>
//         <li>Surname:${surname}</li>
//         <li>Email:${email}</li>
//       </ul>
//     `;
//     sendmail(to,from,subject,output);
//     res.redirect('/send')

// })
// app.listen(PORT,() => {console.log(`server running on port ${PORT}`);})



const path = require("path");

const express = require("express");
const app = express();

const sendEmail = require("./utils/sendEmail");

app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("contact");
});

app.get("/sent", (req, res) => {
  res.render("sent");
});

app.post("/sendemail", (req, res) => {
  const { name, surname, email } = req.body;

  const from = "thefullstackjunkie@gmail.com";
  const to = "lloydjvrensburg@gmail.com";

  const subject = "New Contact Request";

  const output = `
    <p>You have a new Contact Request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Surname: ${surname}</li>
      <li>Email: ${email}</li>
    </ul>
  `;

  sendEmail(to, from, subject, output);
  res.redirect("/sent");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));