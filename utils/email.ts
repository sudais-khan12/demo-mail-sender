import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, // App Password
  },
});

interface MailOptions {
  to: string | string[]; 
  subject: string;
  html: string;
}

export const sendEmail = async ({ to, subject, html }: MailOptions) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to, // Can be a single email or an array of emails
      subject,
      html,
    });
    console.log(`Email sent to ${Array.isArray(to) ? to.join(", ") : to}`);
  } catch (error) {
    console.error(`Error sending email:`, error);
  }
};
