
import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';
import streamRoutes from './routes/streamRoutes';
import { errorHandler } from './utils/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/tasks', taskRoutes);
app.use('/streaming', streamRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
