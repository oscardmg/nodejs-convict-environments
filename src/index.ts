import { config } from './config/configConvict';

// // Load configuration from environment variables and files
// config.loadFile('./.env');
// config.validate({ allowed: 'strict' });

// Access configuration values

config.load({
  port: 1000,
})

let port = config.get('port');

console.log('values:', port);




port = config.get('port');

console.log('values:', port);
console.log('user name:', config.getProperties().database.username);

