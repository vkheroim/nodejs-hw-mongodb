import path from 'node:path';

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const PHONE_NUMBER_REGEX = /^\+\d[0-9]+$/;

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;

export const FIFTEEN_MINUTES = 15 * 60 * 1000;

export const ACCESS_TOKEN_TIME = new Date(Date.now() + FIFTEEN_MINUTES);

export const ONE_DAY = 24 * 60 * 60 * 1000;

export const REFRESH_TOKEN_TIME = new Date(Date.now() + ONE_DAY);

export const SMTP = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',
};

export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');

export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

export const CLOUDINARY = {
  CLOUD_NAME: 'CLOUD_NAME',
  API_KEY: 'API_KEY',
  API_SECRET: 'API_SECRET',
  ENABLE_CLOUDINARY: 'ENABLE_CLOUDINARY',
};

export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');
