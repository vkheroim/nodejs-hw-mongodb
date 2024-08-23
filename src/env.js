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
  MONGO_URI: 'cluster0.qy82j.mongodb.net',
  PORT: process.env.PORT || 3000,
  // Add other environment variables as needed
};
// export function env(name, defaultValue) {
//   const value = process.env[name];

//   if (value) return value;

//   if (defaultValue) return defaultValue;

//   throw new Error(`Missing: process.env['${name}'].`);
// }
MONGO_URI=mongodb+srv://username:password@cluster0.qy82j.mongodb.net/myDatabase?retryWrites=true&w=majority
