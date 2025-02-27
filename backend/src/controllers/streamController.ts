 
import { Request, Response } from 'express';

export const getStreamingData = async (req: Request, res: Response) => {
  try {
    // Simulate an async call to an external streaming API
    const streamingData = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ stream: 'Simulated streaming data' });
      }, 2000);
    });
    res.json(streamingData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching streaming data' });
  }
};
