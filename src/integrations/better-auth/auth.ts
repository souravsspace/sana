import { db } from "@/db";
import * as schema from "@/db/schema";
import { env } from "@/env";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { resetPassword } from "@/integrations/plunk/reset-password";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    forgetPasswordTokenExpiresIn: "300", // 5 minutes
    sendResetPassword: async ({ user, url }) => {
      await resetPassword(user.email, url);
    },
  },
  baseUrl: env.BETTER_AUTH_URL,
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      redirectUri: `${env.BETTER_AUTH_URL}/api/auth/github/callback`,
      autoSignIn: true,
    },
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      redirectUri: `${env.BETTER_AUTH_URL}/api/auth/google/callback`,
      autoSignIn: true,
    },
  },
});
