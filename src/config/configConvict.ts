// config.ts
import convict from 'convict';
import dotenv from 'dotenv';

dotenv.config();

interface AppConfig {
    port: number;
    database: {
        host: string;
        port: number;
        username: string;
        password: string;
    };
    // Add more configuration properties as needed
}

const configSchema: convict.Schema<AppConfig> = {
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 3000,
        env: 'PORT'
    },
    database: {
        host: {
            doc: 'Database host name/IP',
            format: '*',
            default: 'localhost',
            env: 'DB_HOST'
        },
        port: {
            doc: 'Database port',
            format: 'port',
            default: 5432,
            env: 'DB_PORT'
        },
        username: {
            doc: 'Database username',
            format: String,
            default: 'admin',
            env: 'DB_USER'
        },
        password: {
            doc: 'Database password',
            format: String,
            default: '',
            sensitive: true,
            env: 'DB_PASS'
        }
    }
    // Add more configuration properties as needed
};

const config = convict(configSchema);

config.validate({ allowed: 'strict' });

export { config };