import {createPool} from "mysql2/promise";
import { config } from "../config/config";

export const pool = createPool({
    host: config.host,
    password: config.password,
    user: config.user,
    database: config.database,
    namedPlaceholders: true,
    decimalNumbers: true,
})