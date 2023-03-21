// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    res.send("hello world");
    // This will cause a ERR_HTTP_HEADERS_SENT error
    res.setHeader('X-Custom', ['foo', 'bar']);
}
  