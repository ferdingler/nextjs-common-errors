// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const banana = require(req.query.dependency);
    res.status(200).json({ name: 'Loaded banana' });
}
  