import convict from 'convict';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Define configuration schema
const config = convict({
  port: {
    doc: 'The port to bind.',
    format: 'port',
    env: 'PORT',
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: String,
      default: 'localhost',
      env: 'DB_HOST',
    },
    user: {
      doc: 'Database username',
      format: String,
      default: 'myuser',
      env: 'DB_USER',
    },
    password: {
      doc: 'Database password',
      format: String,
      default: 'mypassword',
      env: 'DB_PASSWORD',
    },
  },
});

// Perform validation
config.validate({ allowed: 'strict' });

console.log('port', config.get('port'));

export default config;