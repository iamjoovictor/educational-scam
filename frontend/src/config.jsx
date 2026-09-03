const developmentApiUrl = 'http://localhost:3001/api';
const productionApiUrl = 'https://educational-scam-backend.vercel.app/api';

export const API_BASE_URL = import.meta.env.VITE_API_URL
	|| (import.meta.env.PROD ? productionApiUrl : developmentApiUrl);
