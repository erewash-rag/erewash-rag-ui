// API Configuration
// For production: 'https://4uzc2o31g0.execute-api.eu-west-2.amazonaws.com/prod'
// For development: Using proxy to 'http://localhost:8080'
export const API_BASE_URL = process.env.NODE_ENV === 'development' ? '' : 'https://nb8qf2nst0.execute-api.eu-west-2.amazonaws.com/prod';

// API Endpoints
export const ARTICLES_ENDPOINT = `${API_BASE_URL}/articles`; 