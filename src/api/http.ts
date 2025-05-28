// src/api/http.ts
import axios from 'axios'

/**
 * HTTP-клиент: все запросы пойдут на этот базовый URL
 */
const http = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
})

export default http
