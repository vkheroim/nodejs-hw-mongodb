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

// // Usage exampleCLOUD_NAME=your_cloud_name
MONGO_URI = your_mongodb_uri;
PORT = your_port_number;
CLOUD_NAME = your_cloud_name;
MONGO_URI = your_mongodb_uri;
PORT = your_port_number;
// const cloudName = env('CLOUD_NAME', 'default_cloud_name');
