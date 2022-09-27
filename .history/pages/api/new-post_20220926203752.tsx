// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const contact = req.body;
    const { email, name, feedback } = contact;

    if (
      !email.includes("@") ||
      !name ||
      name.trim().length === 0 ||
      !feedback ||
      feedback.trim().length === 0
    )
      res.status(201).json({ message: "success" });
  }
}
