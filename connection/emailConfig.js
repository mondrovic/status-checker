const nodemailer = require("nodemailer");
require("dotenv").config();

async function main() {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // toggle comment to test server config
  //   transporter.verify((err, success) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log("Server is ready");
  //     }
  //   });

  let payload = await transporter.sendMail({
    from: '"IC Realtime" <ari19@ethereal.email>',
    to: "ari19@ethereal.email",
    subject: "Test",
    text: "This is just a test email",
  });

  console.log("Message sent: %s", payload.messageId);
  // only available if using ethereal
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(payload));
}

module.exports = main;
