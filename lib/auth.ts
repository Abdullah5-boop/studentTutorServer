import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import { UserRole } from "../generated/prisma/enums";


// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "mahmoodapurbo1@gmail.com",
    pass: "trjt ogte eiod iovy",
  },
});

// Email template
function verificationEmailTemplate({
  userEmail,
  verificationUrl,
  token,
  userName,
}: {
  userEmail: string;
  verificationUrl: string;
  token: string;
  userName: string;
}) {
  return `
    <h1>Hello ${userName}</h1>
    <p>Please verify your email:</p>
    <a href="${verificationUrl}">Verify Email</a>
    <p>Token: ${token}</p>
  `;
}

export const auth = betterAuth({
  trustedOrigins: ["http://localhost:3000"],
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    callbackURL: "http://localhost:3000/",
    sendResetPassword: async ({ user, url, token }) => {
      await transporter.sendMail({
        from: '"Maddison Foo Koch" <mahmoodapurbo1@gmail.com>',
        to: user.email,
        subject: "Reset your password",
        text: `Click the link to reset your password: ${url}`,
        html: `
          <h1>Hello ${user.email}</h1>
          <p>Please reset your password:</p>
          <a href="${url}">Reset Password</a>
          <p>Token: ${token}</p>
        `,
      });
    },
  },

  emailVerification: {
    sendOnSignUp: true,

    sendVerificationEmail: async ({ user, url, token }) => {
      console.log("Verification email sent to:", user.email);
      console.log("Verification URL:", url);
      console.log("Verification token:", token);

      await transporter.sendMail({
        from: '"Maddison Foo Koch" <mahmoodapurbo1@gmail.com>',
        to: user.email,
        subject: "Verify your email address",
        text: `Click the link to verify your email: ${url}`,
        html: verificationEmailTemplate({
          userEmail: user.email,
          verificationUrl: url,
          token,
          userName: "Sir",
        }),
      });
    },
  },
  user:{
    additionalFields:{
      role:{
        type:'string',
        required:true,
        defaultValue:UserRole.USER
      }
    }
  }


});
