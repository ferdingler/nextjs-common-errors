// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const wait = req.query.wait || 40000; // milliseconds
  return new Promise((resolve) => {
    setTimeout(() => {
      res.status(200).json({ name: 'John Doe' });
      resolve();
    }, wait);
  });
}
