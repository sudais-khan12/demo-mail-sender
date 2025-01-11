import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../utils/email";
import { render } from "@react-email/render";
import { WelcomeEmail } from "../../emails/WelcomeEmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, name } = req.body;

    // Send welcome email
    const emailHtml = await render(<WelcomeEmail name={name} />);
    await sendEmail({
      to: email,
      subject: "Welcome to Our App",
      html: emailHtml,
    });

    res.status(200).json({ message: "Login successful and email sent" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
