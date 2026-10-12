import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isValidEmail } from "@/lib/validation";

export const runtime = "nodejs";

const TO_EMAIL = "oudompanha456@gmail.com";
const FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function fail(message: string, status: number) {
  return NextResponse.json({ ok: false, success: false, error: message }, { status });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail("Invalid request.", 400);
  }
  if (!body || typeof body !== "object") {
    return fail("Invalid request.", 400);
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const subject = clean(body.subject, 200);
  const message = clean(body.message, 5000);

  if (!name || !email || !message) {
    return fail("Please fill in your name, email and message.", 400);
  }
  if (!isValidEmail(email)) {
    return fail("Please enter a valid email address.", 400);
  }

  console.log("[contact] New message:", { name, email, subject, message });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set, so the email was not sent.");
    return fail("Email service is not configured.", 500);
  }

  const headerLines = [`Name: ${name}`, `Email: ${email}`];
  if (subject) headerLines.push(`Subject: ${subject}`);
  const emailText = `${headerLines.join("\n")}\n\n${message}`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: subject ? `Portfolio: ${subject}` : `New portfolio message from ${name}`,
      text: emailText,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return fail("Could not send your message. Please try again later.", 500);
    }

    return NextResponse.json({ ok: true, success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return fail("Could not send your message. Please try again later.", 500);
  }
}
