import pg from "pg";
import dotenv from "dotenv"

dotenv.config()

const pool = new pg.Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT)
})

export const query = (text, params) => pool.params(text, params);