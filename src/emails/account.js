const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = "";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: "andrew@mead.io",
  from: "andrew@mead.io",
  subject: "This is my first creation!",
  text: "I hope this one actually get to you.",
});
