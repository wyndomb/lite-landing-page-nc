import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { message: "Missing name or email" },
        { status: 400 }
      );
    }

    const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL;

    if (!makeWebhookUrl) {
      console.error("MAKE_WEBHOOK_URL is not set");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch(makeWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Failed to send data to Make.com:", errorBody);
      return NextResponse.json(
        { message: "Failed to submit data" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Successfully joined waitlist" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
