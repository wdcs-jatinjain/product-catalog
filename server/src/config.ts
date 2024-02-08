import { configDotenv } from "dotenv";
configDotenv()
export const API_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL
export const SECRET_KEY = process.env.JWT_SECRET_KEY

export const ADMIN_SECRET_KEY = process.env.JWT_ADMIN_SECRET_KEY