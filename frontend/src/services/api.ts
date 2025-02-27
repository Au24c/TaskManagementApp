
import dotenv from 'dotenv';

dotenv.config();

const apiUrl = process.env.API_URL;

export function fetchApi(endpoint: string) {
    return fetch(`${apiUrl}${endpoint}`);
  }