
// Define a timeout limit (in minutes)
const TIMEOUT_LIMIT = 60;

export const checkTaskTimeout = (task: { duration: number }): boolean => {
  return task.duration > TIMEOUT_LIMIT;
};
