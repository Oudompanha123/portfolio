import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  // Server-side validation — never trust the client.
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in every field." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 }
    );
  }

  // ---------------------------------------------------------------------------
  // TODO: deliver the message. Right now it just logs to the server console.
  // Pick one and uncomment/install:
  //
  //   • Resend (https://resend.com) — simplest:
  //       import { Resend } from "resend";
  //       const resend = new Resend(process.env.RESEND_API_KEY);
  //       await resend.emails.send({
  //         from: "Portfolio <onboarding@resend.dev>",
  //         to: "you@example.com",
  //         subject: `New message from ${name}`,
  //         replyTo: email,
  //         text: message,
  //       });
  //
  //   • Or post to a webhook (Slack, Discord, Zapier, Formspree, etc.)
  // ---------------------------------------------------------------------------
  console.log("New contact message:", { name, email, message });

  return NextResponse.json({ ok: true });
}
