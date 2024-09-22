// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  // Set up your email transport using your SMTP configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // e.g., smtp.gmail.com pass:kdcm wbzm vgjz kuwj
    port: 587, // or 465 for SSL
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER, // your email address
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // your email password or app-specific password
    },
  });

  // Set up email data
  const mailOptions = {
    from: email, // sender address
    to: 'justmeetpatel@gmail.com', // list of receivers
    subject: subject, // Subject line
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ status: 'success' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ status: 'error', message: 'Failed to send email' }), { status: 500 });
  }
}
