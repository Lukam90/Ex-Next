import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.setHeader("X-Custom-Header", "We are open to hire people!")
	res.setHeader("Set-Cookie", "areyouprogrammer=true;")

	res.json({ num: Math.floor(Math.random() * 10) })
}
