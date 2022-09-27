// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const contact = req.body;
    const { email, name, feedback } = contact;

    if (
      !email.includes("@") ||
      !name ||
      name.trim().length === 0 ||
      !feedback ||
      feedback.trim().length === 0
    ) {
      res.status(422).json({ message: "invalid input value" });
      return;
    }

    let client;
    let connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.lsg2quf.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectString);
    } catch (err) {
      res.status(500).json({ message: "cannot connect to db" });
      return;
    }

    try {
      const db = client.db();

      const result = await db.collection("contacts").insertOne(contact);
      res
        .status(201)
        .json({ contact, message: "contact info inserted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Cannot insert data to mongodb" });
    }

    if (client) {
      client.close();
    }
  } else {
    res.status(200).json({ message: "GET METHOD HAS YET BEEN SUPPORTED!" });
  }
}
