import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    port: 8889,
    password: 'root',
    user: 'root',
    database: 'adsapp',
    namedPlaceholders: true,
    decimalNumbers: true,
})