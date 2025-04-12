import { NextResponse } from "next/server";

// Function to sanitize Discord mentions (removes '@' mentions)
const sanitizeInput = (text: string) => {
  return text.replace(/@([everyone|here|everyone\s\w+\s?]+)/gi, '[REDACTED]');
};

export async function POST(request: Request) {
  try {
    const { discord, subject, message } = await request.json();

    // Validate input
    if (!discord || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Sanitize form data
    const sanitizedDiscord = sanitizeInput(discord);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    // Validate Discord handle (basic check)
    if (sanitizedDiscord.length < 2 || sanitizedDiscord.length > 32) {
      return NextResponse.json({ error: "Invalid Discord handle" }, { status: 400 });
    }

    // Get webhook URL from environment variable
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      throw new Error("Webhook URL is not configured");
    }

    const userMention = "<@547034093007929344>";

    const payload = {
      username: "Contact Form",
      content: userMention,
      embeds: [
        {
          title: sanitizedSubject || "New Contact Message",
          color: 5814783,
          fields: [
            { name: "Discord", value: sanitizedDiscord || "N/A", inline: true },
            { name: "Message", value: sanitizedMessage || "N/A" },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to send message to Discord");
    }

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send message" },
      { status: 500 }
    );
  }
}