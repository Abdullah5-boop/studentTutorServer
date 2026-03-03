// emailTemplates.ts
export interface VerificationEmailParams {
  userEmail: string;
  verificationUrl: string;
  token: string;
  userName?: string; // optional, fallback to email if not provided
}

/**
 * Generate HTML and plain text for verification email
 */
export function verificationEmailTemplate({
  userEmail,
  verificationUrl,
  token,
  userName,
}: VerificationEmailParams) {
  const displayName = userName || userEmail;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2>Hello ${displayName},</h2>
      <p>Thank you for signing up! Please verify your email address by clicking the button below:</p>
      <a href="${verificationUrl}" style="
        display: inline-block;
        padding: 12px 24px;
        margin: 16px 0;
        background-color: #4CAF50;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
      ">Verify Email</a>
      <p>If the button doesn't work, copy and paste this URL into your browser:</p>
      <p><a href="${verificationUrl}">${verificationUrl}</a></p>
      <p>Verification token: ${token}</p>
      <p>Thank you,<br>Your Company Team</p>
    </div>
  `;

  const text = `
Hello ${displayName},

Thank you for signing up! Please verify your email by visiting the link below:

${verificationUrl}

Verification token: ${token}

Thank you,
Your Company Team
  `;

  return { html, text };
}
