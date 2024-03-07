import nodemailer from "nodemailer";

export function mail({ name, email, phone, message }) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  transporter
    .sendMail({
      from: "Priyansh Shah <shah.priyansh04@gmail.com>",
      to: "shah.priyansh04@gmail.com",
      subject: "Customer Support",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    })
    .then(() => console.log("Email sent"))
    .catch((error) => {
      console.log(error.message);
      return false;
    });
  return true;
}
