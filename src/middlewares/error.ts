import { Request, Response, NextFunction } from 'express';

// Error-handling middleware
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Error occurred:', err.message);
    res.status(500).json({ error: 'Something went wrong!' });
};

// 404 middleware
export const notFoundHandler = (req: Request, res: Response) => {
    res.status(404).json({ error: 'Route not found!' });
};
