// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
}

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse<Data>) {
  await axios
    .post(
      'https://api.sendgrid.com/v3/mail/send',
      {
        personalizations: [
          {
            to: [
              {
                email: req.body.to,
              },
            ],
          },
        ],
        from: {
          email: req.body.from,
        },
        subject: req.body.subject,
        content: [
          {
            type: 'text/plain',
            value: req.body.text,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )
    .then((r) => res.status(r.status).json(r.data))
    .catch((r) => res.status(r.response.status).json(r.response.data))
}
