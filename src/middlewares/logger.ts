import { Request, Response, NextFunction } from 'express';

// Logging middleware
export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // Pass control to the next middleware
};