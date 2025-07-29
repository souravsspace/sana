import nodemailer from "nodemailer";

import { env } from "@/env";
import { appConfig } from "@/constants/app-config";

export const transporter = nodemailer.createTransport({
  service: env.SMTP_HOST,
  port: env.SMTP_PORT,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

export const resetPassword = async (email: string, details: string) => {
  console.log("Sending reset password email to:", email);

  await transporter.sendMail({
    from: env.SMTP_USER,
    to: email,
    subject: `Password Reset Request for ${appConfig.name}`,
    html: `
    <p>You requested a password reset.</p>
    <p>${details}</p>
    
    <p>If you did not request this, please ignore this email.</p>
  `,
  });
};
