// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import qs from "qs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const query = qs.stringify(req.query);
  const response = await fetch(
    `https://polygon.api.0x.org/swap/v1/quote?$sellToken=0x2BF397Fc57262bB2F3d2325a12306FaE0f9103E7&sellAmount=18000&buyToken=0xc2132d05d31c914a87c6611c10748aeb04b58e8f&takerAddress=0x4dd97080adf36103bd3db822f9d3c0e44890fd69`,
    {
      headers: {
        "0x-api-key": "c9f13c84-9fcb-4f42-aa30-a11b0d016aa5", // process.env.NEXT_PUBLIC_0X_API_KEY,
      },
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}
