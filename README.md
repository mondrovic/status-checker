# status-checker

## Description

status-checker utilizes node-ping and nodemailer to ping a device and send out an email if the host is unreachable.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#Credits)
- [Questions](#questions)

## Installation

1. Clone the repository
2. Run `npm install package.json` to install dependencies.
3. (Recommended) Create a .env file to hide SMTP credentials

## Usage

Replace the following code with proper SMTP connection information. You can choose to hide the credentials into a .env file. If using .env, create variables for:

- EMAIL_SMTP="smtp_connection_info",
- EMAIL_USER="smtp_username",
- EMAIL_PASS="smtp_pass"

```js
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
```

You can uncomment the following block of code to verify connection to the SMTP server:

```js
toggle comment to test server config
    transporter.verify((err, success) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is ready");
    }
    });
```

In addition, uncommenting `console.log("Preview URL: %s", nodemailer.getTestMessageUrl(payload));` will allow you to get diagnostic information if using nodemailer for testing.

Running `node app.js` or `npm start` should run the server. For best results, set script to be ran on a cron job.

## Credits & Dependencies

http://github.com/mondrovic

## Inquiries

Any questions or inquiries can go to mondrovic1@gmail.com
Matthew Ondrovic
https://githbub.com/mondrovic
