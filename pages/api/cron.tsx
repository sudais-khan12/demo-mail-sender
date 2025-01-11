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
  { email: "lleto6522@gmail.com", name: "User One" },
  { email: "batm44619@gmail.com", name: "User Two" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Schedule a job to run every 30 seconds
  cron.schedule("*/30 * * * * *", async () => {
    console.log("Sending scheduled emails...");
    for (const user of users) {
      const emailHtml = await render(<ScheduledEmail name={user.name} />);
      await sendEmail({
        to: user.email,
        subject: "Scheduled Email",
        html: emailHtml,
      });
    }
  });

  res.status(200).json({ message: "Cron job started (runs every 30 seconds)" });
}