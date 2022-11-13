import { DataSource } from "typeorm";
import dotenv from 'dotenv';
dotenv.config();

export const dataSource = new DataSource({
    type: 'mssql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    options: {encrypt: false}
});