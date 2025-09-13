const sendMessage = require("../middleware/mailer");

exports.Send = async (req, res) => {
  const {
    firstname,
    lastname,
    company,
    email,
    phone,
    country,
    subject,
    message,
  } = req.body;

  // Combine first and last name for full name
  const fullName = `${firstname} ${lastname}`;

  try {
    // Call sendMessage function (Ensure it supports all parameters)
    await sendMessage(
      email,
      fullName,
      company,
      phone,
      country,
      subject,
      message
    );

    res
      .status(201)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error during message sending:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
