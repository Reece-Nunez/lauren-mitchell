import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, sessionType, message, _company, _t } = await request.json();

    // Spam checks: honeypot filled or form submitted too fast (<2s)
    if (_company) {
      return NextResponse.json({ success: true }); // silent fail for bots
    }
    if (_t && Date.now() - _t < 2000) {
      return NextResponse.json({ success: true }); // silent fail for bots
    }

    if (!name || !email || !sessionType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Lauren Mitchell Photography <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "hello@laurenmitchellphoto.com",
      replyTo: email,
      subject: `New Inquiry — ${sessionType} Session`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2C2824; border-bottom: 1px solid #C4926A; padding-bottom: 12px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 120px;">Name</td>
              <td style="padding: 8px 0; color: #2C2824;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Email</td>
              <td style="padding: 8px 0; color: #2C2824;">
                <a href="mailto:${email}" style="color: #C4926A;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; color: #888;">Phone</td>
              <td style="padding: 8px 0; color: #2C2824;">
                <a href="tel:${phone}" style="color: #C4926A;">${phone}</a>
              </td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 8px 0; color: #888;">Session Type</td>
              <td style="padding: 8px 0; color: #2C2824;">${sessionType}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f8f4ef; border-left: 3px solid #C4926A;">
            <p style="color: #888; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="color: #2C2824; margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
