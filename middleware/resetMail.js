const nodemailer = require("nodemailer");
const htmlTemplate = require("./resetTemplate");

require("dotenv").config();

const user = process.env;

module.exports = async (email, fullName, date, id, string) => {
  let transporter = nodemailer.createTransport({
    host: "mail.netfiliate.net",
    port: 465,
    secure: true,
    auth: {
      type: "login",
      user: "contact@netfiliate.net",
      pass: "m4zNzV}ExF]g",
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    },
    ignoreTLS: false
  });

  let info = await transporter.sendMail({
    from: "Netfiliate contact@netfiliate.net",
    to: `${email}`,
    subject: "Reset Your Password",
    html: `${htmlTemplate(fullName, string)}`,
  });

  transporter.sendMail(info, (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("sent");
    }
  });
};
