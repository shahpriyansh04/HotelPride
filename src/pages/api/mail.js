// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mail } from "@/lib/mail";

export default function handler(req, res) {
  const { name, email, phone, message } = req.query;
  const result = mail({ name, email, phone, message });
  if (result) res.status(200).json({ message: "Successfull" });
  else res.status(200).json({ name: "Failed" });
}
