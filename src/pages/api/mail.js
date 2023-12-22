// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mail } from "@/lib/mail";

export default function handler(req, res) {
  const result = mail();
  if (result) res.status(200).json({ name: "John Doe" });
  else res.status(200).json({ name: "Failed" });
}
