import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = contactSchema.parse(body);

    // In a real application, you would send the email here
    // For now, we'll just log it and return success
    console.log("Contact form submission:", { name, email, subject, message });

    // You could integrate with services like:
    // - Resend
    // - SendGrid
    // - AWS SES
    // - Nodemailer

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 400 }
    );
  }
}