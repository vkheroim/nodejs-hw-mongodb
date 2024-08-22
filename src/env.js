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
// export function env(name, defaultValue) {
//   const value = process.env[name];

//   if (value) return value;

//   if (defaultValue) return defaultValue;

//   throw new Error(`Missing: process.env['${name}'].`);
// }

// // Usage example
// const cloudName = env('CLOUD_NAME', 'default_cloud_name');
