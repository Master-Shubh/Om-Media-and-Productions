import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/data";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, date, services, message } = body ?? {};

    if (!name || !phone || !services) {
      return NextResponse.json({ success: false, message: "Name, phone and service are required." }, { status: 400 });
    }
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Contact API: EMAIL_USER / EMAIL_PASS are not configured.");
      return NextResponse.json({ success: false, message: "Email service is not configured." }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.LEADS_TO_EMAIL || site.email,
      replyTo: email || undefined,
      subject: `New Lead — ${name} | OM Media & Productions`,
      text: [
        "New enquiry from OM Media & Productions website",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "Not provided"}`,
        `Event Date: ${date || "Not provided"}`,
        `Service: ${services}`,
        `Message: ${message || "None"}`
      ].join("\n")
    });

    return NextResponse.json({ success: true, message: "Enquiry sent successfully." });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ success: false, message: "Failed to send enquiry." }, { status: 500 });
  }
}
