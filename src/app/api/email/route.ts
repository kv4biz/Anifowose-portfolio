// app/api/email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_PASS || email,
      to: "kv4biz@gmail.com",
      subject: "New Contact Form Submission",
      text: `You have received a new message from your portfolio built by NXTFLO.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `
          <div style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #133679; padding: 20px; text-align: center;">
                <h2 style="color: #ffffff; margin: 0;">New Message from Your Portfolio</h2>
                <p style="color: #e0e0e0; margin: 5px 0 0;">Built by NXTFLO</p>
              </div>
              <div style="padding: 20px; color: #333333; line-height: 1.6;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
              </div>
              <div style="background-color: #f0f0f0; padding: 10px; text-align: center; font-size: 12px; color: #777777;">
                <p>This email was generated from your portfolio website.</p>
              </div>
            </div>
          </div>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, info });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Email could not be sent" },
      { status: 500 }
    );
  }
}
