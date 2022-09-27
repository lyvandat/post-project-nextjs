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

    try {
      client = await MongoClient.connect(
        "mongodb+srv://lyvandat:0909927212aA@cluster0.lsg2quf.mongodb.net/posts?retryWrites=true&w=majority"
      );
    } catch (err) {
      res.status(500).json({ message: "Cannot connect to mongodb" });
      return;
    }

    try {
      const db = client.db();
      const collection = db.collection("contacts");

      const result = await collection.insertOne(contact);
      console.log(result.insertedId);
      client.close();
      res
        .status(201)
        .json({ contact, message: "contact info inserted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Cannot insert data to mongodb" });
    }
  }
  res.status(200).json({ message: "GET METHOD HAS YET BEEN SUPPORTED!" });
}
