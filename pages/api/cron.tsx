import { NextApiRequest, NextApiResponse } from "next";
import cron from "node-cron";
import { sendEmail } from "../../utils/email";
import { render } from "@react-email/render";
import { ScheduledEmail } from "../../emails/ScheduledEmail";

interface User {
  email: string;
  name: string;
}

const users: User[] = [
  { email: "batm44619@gmail.com", name: "User One" },
  { email: "lleto6522@gmail.com", name: "User Two" },
  { email: "saif.ur.rehman.waisa@gmail.com", name: "User Three" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Schedule a job to run every 10 secs
  cron.schedule("*/10 * * * * *", async () => {
    console.log("Sending scheduled emails...");

    // Prepare the email content
    const emailHtml = await render(<ScheduledEmail name="All Users" />);

    // Send the email to all users at once
    await sendEmail({
      to: users.map((user) => user.email), 
      subject: "Scheduled Email",
      html: emailHtml,
    });

    console.log("Emails sent successfully!");
  });

  res.status(200).json({ message: "Cron job started" });
}
