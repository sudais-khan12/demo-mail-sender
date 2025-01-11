Setting Up Gmail for Sending Emails Using Nodemailer
To use Gmail for sending emails with Nodemailer, you need to generate an App Password and configure it in your project. Follow these steps:

Step 1: Log in to Your Google Account
Open your browser and go to "Google Account Security" Settings.
Log in with the Gmail account you want to use for sending emails.
Step 2: Enable 2-Step Verification
In the Security section, scroll down to the Signing in to Google section.
Click on 2-Step Verification.
Follow the on-screen instructions to enable it. You may need:
Your phone number for verification.
A security app like Google Authenticator for generating codes.
Step 3: Generate an App Password
After enabling 2-Step Verification, go back to the Security tab.

Under the Signing in to Google section, click on App Passwords.

Note: If you don’t see the "App Passwords" option:

Ensure 2-Step Verification is enabled.
Confirm you're logged into your primary Google Account (not a Google Workspace account that might have restricted settings).
In the App Passwords section:

For Select the app, choose Mail.
For Select the device, choose Other (Custom name).
Enter a custom name like NodeMailer App and click Generate.

Step 4: Copy the Generated App Password
Google will display a 16-character App Password (e.g., abcd-efgh-ijkl-mnop).
Copy this password (without spaces) and store it securely.