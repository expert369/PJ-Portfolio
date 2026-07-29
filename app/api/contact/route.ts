import emailjs, { EmailJSResponseStatus } from '@emailjs/nodejs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, subject, email, message } = body;

  if (!name || !subject || !email || !message){
    return NextResponse.json({error: "Missing Fields"}, { status: 400 });
  }

  const publicKey = process.env.EMAIL_JS_PUBLIC_KEY;
  const privateKey = process.env.EMAIL_JS_PRIVATE_KEY;
  const emailService = process.env.EMAIL_SERVICE;
  const emailTemplate = process.env.EMAIL_TEMPLATE;

  if (!publicKey || !emailService || !emailTemplate){
    return NextResponse.json({error: "Missing EmailJS config"}, { status: 500 })
  }

  try {
    await emailjs.send(emailService, emailTemplate, { name, subject, email, message }, { publicKey, privateKey });
    return NextResponse.json({success: true});
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      console.error("EmailJS error:", err.status, err.text);
      return NextResponse.json({ error: `EmailJS: ${err.text}` }, { status: 500 });
    }
    console.error("EmailJS error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
