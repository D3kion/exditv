import { NextFunction, Request, Response } from "express"

export const logger = async (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now()
  const ms = Date.now() - start
  console.log(`${req.method} ${req.url} - ${ms} ms`)
  return await next()
}
