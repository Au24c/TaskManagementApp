 
import { Router } from 'express';
import { getStreamingData } from '../controllers/streamController';

const router = Router();

router.get('/', getStreamingData);

export default router;
