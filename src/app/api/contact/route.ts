import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please provide a valid email address"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
  honeypot: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot spam defense check
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Quietly succeed to fool automated spam bots
      return NextResponse.json({ success: true, message: "Message received." });
    }

    const validatedData = contactSchema.parse(body);

    // In production with Resend or SMTP configured:
    // e.g. await resend.emails.send(...)
    // Logging safely server-side
    console.log(`[Contact Form Received] From: ${validatedData.name} <${validatedData.email}> | Subject: ${validatedData.subject}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
