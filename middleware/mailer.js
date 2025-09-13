const nodemailer = require("nodemailer");
require("dotenv").config();

const user = process.env;

module.exports = async (email, fullName, company, phone, country, subject, message) => {
  let transporter = nodemailer.createTransport({
    host: "mail.zentedge.com",
    port: 465,
    secure: true,
    auth: {
      type: "login",
      user: "info@zentedge.com",
      pass: "QC$-ojne%+o5",
    },
    tls: {
      rejectUnauthorized: false,
    },
    ignoreTLS: false,
  });

  // Template for user confirmation email
  const userEmailTemplate = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
      <h2>Hello, ${fullName}!</h2>
      <p>Thank you for reaching out to <strong>ZentEdge Solutions</strong>. Below are the details of your inquiry:</p>
      <ul style="list-style: none; padding: 0;">
        <li><strong>Subject:</strong> ${subject}</li>
        <li><strong>Company:</strong> ${company || "N/A"}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Country:</strong> ${country}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
      <p>We will review your message and get back to you as soon as possible.</p>
      <br>
      <p>Best Regards,</p>
      <p><strong>ZentEdge Solutions Team</strong></p>
    </div>
  `;

  // Template for admin notification email
  const adminEmailTemplate = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
      <h2>New Inquiry Received</h2>
      <p>A new message has been submitted via the contact form:</p>
      <ul style="list-style: none; padding: 0;">
        <li><strong>Full Name:</strong> ${fullName}</li>
        <li><strong>Company:</strong> ${company || "N/A"}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Country:</strong> ${country}</li>
        <li><strong>Subject:</strong> ${subject}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
    </div>
  `;

  // Send emails
  try {
    // Send confirmation to the user
    await transporter.sendMail({
      from: "ZentEdge Solutions Team <contact@zentedge.com>",
      to: email,
      subject: `Your Inquiry: ${subject}`,
      html: userEmailTemplate,
    });

    // Send notification to support team
    await transporter.sendMail({
      from: "ZentEdge Solutions Team <contact@zentedge.com>",
      to: "support@zentedge.com",
      bcc: "zentedge@gmail.com",
      subject: `New Inquiry Received: ${subject}`,
      html: adminEmailTemplate,
    });

    console.log(`Emails successfully sent to ${email} and support@zentedge.com`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};