import pg from 'pg';
import dotenv from 'dotenv';
dotenv.configDotenv();

import { PGSQL_URI } from '$env/static/private';
import DatabaseHandler from './DatabaseHandler';

let pool = new pg.Pool({
	connectionString: PGSQL_URI,
	ssl: true
});

export const database = new DatabaseHandler(pool);
