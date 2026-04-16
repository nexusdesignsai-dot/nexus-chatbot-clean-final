import OpenAI from "openai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
  });

  return new Response(
    JSON.stringify({
      message: response.choices[0].message,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
