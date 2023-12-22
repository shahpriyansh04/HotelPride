import nodemailer from "nodemailer";

export function mail() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_USER,
      pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
    },
  });

  transporter
    .sendMail({
      from: "Priyansh Shah <shah.priyansh04@gmail.com>",
      to: "shah.priyansh04@gmail.com",
      subject: "Hello",
      text: "Hello World",
    })
    .then(() => console.log("Email sent"))
    .catch((error) => {
      console.log(error.message);
      return false;
    });
  return true;
}
