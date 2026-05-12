import { Resend } from "resend";
import { site } from "./site";

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL || site.email;
const contactFromEmail = process.env.CONTACT_FROM_EMAIL || "no-reply@vitrincabinetery.com";

let client: Resend | null = null;
function getClient(): Resend {
  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  if (!client) client = new Resend(resendApiKey);
  return client;
}

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
  zip?: string;
};

export async function sendContactEmail(payload: ContactPayload) {
  const subject = `New consultation request — ${payload.projectType}`;
  const text = [
    `Name: ${payload.firstName} ${payload.lastName}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : null,
    payload.zip ? `Zip: ${payload.zip}` : null,
    `Project: ${payload.projectType}`,
    "",
    "Message:",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");

  return getClient().emails.send({
    from: `${site.name} Website <${contactFromEmail}>`,
    to: [contactToEmail],
    replyTo: payload.email,
    subject,
    text,
  });
}
