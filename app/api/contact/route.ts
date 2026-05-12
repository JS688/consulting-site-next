import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_RECIPIENT = process.env.CONTACT_EMAIL_TO || "ai@jul-tech.com";
const CONTACT_SENDER = process.env.CONTACT_EMAIL_FROM || CONTACT_RECIPIENT;

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !port || !user || !pass) {
    return null;
  }

  return {
    host,
    port: Number(port),
    auth: {
      user,
      pass,
    },
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, details, service, company, locale } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const smtpConfig = getSmtpConfig();

    if (!smtpConfig) {
      return NextResponse.json(
        {
          error:
            "Email settings are not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASSWORD to enable delivery.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.port === 465,
      auth: smtpConfig.auth,
    });

    const messageText = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      service ? `Service: ${service}` : null,
      details ? `Details: ${details}` : null,
      message ? `Message: ${message}` : null,
      locale ? `Locale: ${locale}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = service
      ? `New contact form submission - ${service}`
      : "New contact form submission";

    await transporter.sendMail({
      from: CONTACT_SENDER,
      to: CONTACT_RECIPIENT,
      replyTo: email,
      subject,
      text: messageText,
      html: messageText.replace(/\n/g, "<br />"),
    });

    return NextResponse.json(
      { message: "Message received. We'll be in touch soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
