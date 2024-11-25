import { Request, Response } from "express";

export default function middleware(
    req:Request,
    res: Response
) {
    console.log('Time:', Date.now())

    // Middleware code here
}