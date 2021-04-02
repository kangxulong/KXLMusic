const devBASE_URL = "http://123.207.32.32:9001";
const proBASE_URL = "http://123.207.32.32:9001";

export const BASE_URL = process.env.NODE_ENV === "development" ? devBASE_URL : proBASE_URL;

export const TIMEOUT = 5000