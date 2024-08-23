import dotenv from 'dotenv';

dotenv.config();

export function getEnv(name, defaultValue) {
  const value = process.env[name];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
}

// Usage example
const cloudName = getEnv('CLOUD_NAME', 'default_cloud_name');

export const env = {
  MONGO_URI: 'mongodb+srv://vskheroim:hQP6zw4iCBJ6m1Ss@cluster0.qy82j.mongodb.net',
  PORT: process.env.PORT || 3000,

};

MONGO_URI=mongodb+srv://vskheroim:hQP6zw4iCBJ6m1Ss@cluster0.qy82j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
