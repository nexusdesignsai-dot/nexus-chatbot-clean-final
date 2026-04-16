export async function POST() {
  return new Response(
    JSON.stringify({ message: "API WORKING" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
