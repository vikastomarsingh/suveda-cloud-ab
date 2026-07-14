import type { Config } from "@netlify/functions";
import { db } from "../../db/index.js";
import { contacts } from "../../db/schema.js";

export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { name, email, company, serviceOfInterest, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const [saved] = await db
      .insert(contacts)
      .values({ name, email, company, serviceOfInterest, message })
      .returning();

    return Response.json({
      success: true,
      data: saved,
      message: "Thank you for contacting Suveda Cloud AB. We will get back to you soon.",
    });
  } catch (error) {
    console.error("Failed to save contact submission:", error);
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
};

export const config: Config = {
  path: "/api/contact",
  method: "POST",
};
