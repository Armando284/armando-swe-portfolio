import { mailchimp } from "@/resources";
import { NextRequest, NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseButtondownResponse(html: string, finalUrl: string) {
  // Prioridad 1: Estado en la URL (lo más confiable)
  if (finalUrl.includes("state=confirmed_subscription") ||
    finalUrl.includes("state=subscribed")) {
    return {
      success: true,
      message: "Thanks for subscribing! Check your inbox to confirm your subscription.",
    };
  }

  // Prioridad 2: Patrones existentes (para respuestas sin redirect)
  const errorMatch = html.match(/message-box--error[^>]*>\s*([\s\S]*?)<\/div>/);
  if (errorMatch) {
    return {
      success: false,
      message: errorMatch[1].replace(/\s+/g, " ").trim(),
    };
  }

  const infoMatch = html.match(/message-box--info[^>]*>\s*([\s\S]*?)<\/div>/);
  if (infoMatch) {
    return {
      success: true,
      message: infoMatch[1].replace(/\s+/g, " ").trim(),
    };
  }

  if (/thank you|you(?:'|&#x27;)re subscribed|successfully subscribed|confirmed/i.test(html)) {
    return {
      success: true,
      message: "Thanks for subscribing! Check your inbox to confirm your subscription.",
    };
  }

  return {
    success: false,
    message: "Something went wrong. Please try again.",
  };
}

export async function POST(request: NextRequest) {
  let email: unknown;

  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const formData = new URLSearchParams();
  formData.set("email", email.trim());
  formData.set("embed", "1");

  try {
    const response = await fetch(mailchimp.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });
    console.log("Buttondown API Response Status:", response);
    const html = await response.text();
    const result = parseButtondownResponse(html, response.url);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.message },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true, message: result.message });
  } catch {
    return NextResponse.json(
      { success: false, error: "Unable to reach the subscription service. Please try again." },
      { status: 502 },
    );
  }
}
