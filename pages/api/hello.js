// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

require('dotenv').config()

export default function handler(req, res) {
  res.status(200).json({ name: process.env.PERSON_NAME })
}
