export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const url = searchParams.get("url");

  if (!url) {
    return new Response("not found", {
      status: 404,
    });
  }

  const res = await fetch(url, {
    headers: {
      "User-Agent": "bot",
    },
  });
  const htmlString = await res.text();

  return new Response(htmlString, {
    status: 200,
  });
}
